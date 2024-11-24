import { AreaService } from "../service/area-service";
import { IResolvers, UserInputError, ApolloError } from 'apollo-server';
import { NotFoundAreaError } from '../exception/not-found-area-error';
import { SpectrumService } from "../service/spectrum-service";

const areaService = new AreaService();
const spectrumService = new SpectrumService(areaService);

export const resolvers: IResolvers = {
    Query: {
        areas: () => areaService.get(),
        spectrum: (_, { id }) => {
            try {
                const areaId = parseInt(id, 10);

                return spectrumService.getByAreaId(areaId);
            } catch (e) {
                if (e instanceof NotFoundAreaError) {
                    throw new UserInputError(e.message);
                } else {
                    throw new ApolloError('An unexpected error occurred');
                }
            }
        },
    },
};