import data from "../data/spectrum.json";
import {Coordinate, SpectrumData} from "../model";
import {AreaService} from "./area-service";

export class SpectrumService {
    private readonly coordinates: Coordinate[];

    constructor(private areaService: AreaService) {
        const spectrumData: SpectrumData = data;
        this.coordinates = spectrumData.spectrum;
    }

    getByAreaId(id: number) {
        const frequencies: number[] = this.areaService.getById(id).frequencies;
        return this.coordinates.filter(c => c.x > frequencies[0] && c.x < frequencies[1])
    }
}