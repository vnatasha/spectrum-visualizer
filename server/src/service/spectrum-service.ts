import { AreaRepository } from "../repository/area-repository";
import { CoordinateRepository } from '../repository/coordinate-repository'
import { Coordinate, Area } from "../model";
import { NotFoundAreaError } from '../exception/not-found-area-error';

export class SpectrumService {
    constructor(
        private readonly coordinateRepository: CoordinateRepository,
        private readonly areaRepository: AreaRepository
    ) {}

    getAreas(): Area[] {
        return this.areaRepository.findAll();
    }

    getCoordinatesByAreaId(id: number): Coordinate[] {
        const area = this.areaRepository.findById(id);
        if (!area) {
            throw new NotFoundAreaError(`There is no area with id ${id}`);
        }
        return this.coordinateRepository.getByFrequencyRange(area.minFrequency, area.maxFrequency);
    }
}