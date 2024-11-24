import * as path from 'path';
import * as fs from 'fs';
import { AreaService } from "./area-service";
import { Coordinate, SpectrumData } from "../model";

export class SpectrumService {
    private readonly coordinates: Coordinate[];

    constructor(private areaService: AreaService) {
        const spectrumPath = path.join(__dirname, '../data/spectrum.json');
        try {
            const spectrumData: SpectrumData = JSON.parse(fs.readFileSync(spectrumPath, 'utf8'));
            this.coordinates = spectrumData.spectrum;
        } catch (error) {
            throw new Error('Failed to load areas data');
        }
    }

    getByAreaId(id: number) {
        // Fetch the area only once
        const area = this.areaService.getById(id);
        if (!area.frequencies || area.frequencies.length < 2) {
            throw new Error(`Invalid frequency range for area ${id}`);
        }
        const [minFrequency, maxFrequency] = area.frequencies;

        // Filter based on frequency range
        return this.coordinates.filter(
            (coordinate) => coordinate.x > minFrequency && coordinate.x < maxFrequency
        );
    }
}