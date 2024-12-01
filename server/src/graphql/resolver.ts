import path from 'path';
import { IResolvers, UserInputError, ApolloError } from 'apollo-server';
import { SQLiteAreaRepository } from "../repository/area-repository";
import { SQLiteCoordinateRepository } from "../repository/coordinate-repository";
import { NotFoundAreaError } from '../exception/not-found-area-error';
import { SpectrumService } from "../service/spectrum-service";

const dbPath = path.resolve(__dirname, '../data/spectrum_db.db');

const areaRepository = new SQLiteAreaRepository(dbPath);
const coordinateRepository = new SQLiteCoordinateRepository(dbPath);

const spectrumService = new SpectrumService(coordinateRepository, areaRepository);

export const resolvers: IResolvers = {
    Query: {
        areas: () => spectrumService.getAreas(),
        spectrum: (_, { id }) => {
            try {
                const areaId = parseInt(id, 10);

                return spectrumService.getCoordinatesByAreaId(areaId);
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