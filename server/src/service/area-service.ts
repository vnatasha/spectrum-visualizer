import * as path from 'path';
import * as fs from 'fs';
import { Area } from "../model";
import { NotFoundAreaError } from '../exception/not-found-area-error';

export class AreaService {
    private readonly areas: Area[];

    constructor() {
        const areasPath = path.join(__dirname, '../data/areas.json');
        try {
            this.areas = JSON.parse(fs.readFileSync(areasPath, 'utf8'));
        } catch (error) {
            throw new Error('Failed to load areas data');
        }
    }

    get() {
        return this.areas;
    }

    getById(id: number) {
        const area = this.areas.find((a) => a.id === id);
        if (!area) {
            throw new NotFoundAreaError(`There is no area with id ${id}`);
        }
        return area;
    }
}