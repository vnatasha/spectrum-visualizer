import data from '../data/areas.json'
import { Area } from "../model";
import { NotFoundAreaError } from '../exception/not-found-area-error';

export class AreaService {
    private readonly areas: Area[];

    constructor() {
        this.areas = data;
    }

    get() {
        return this.areas;
    }

    getById(id: number) {
        const area: Area = this.areas.find((a) => a.id == id);
        if (!area) {
            throw new NotFoundAreaError(`There is no area with id ${id}`)
        }
        return area
    }
}