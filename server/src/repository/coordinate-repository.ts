import Database from 'better-sqlite3';
import { Coordinate } from '../model';

export interface CoordinateRepository {
    getByFrequencyRange(minFrequency: number, maxFrequency: number): Coordinate[]
}

export class SQLiteCoordinateRepository implements CoordinateRepository {
    private readonly db: Database.Database;

    constructor(dbPath: string) {
        this.db = new Database(dbPath);
    }

    getByFrequencyRange(minFrequency: number, maxFrequency: number): Coordinate[] {
        return this.db.prepare(`
            SELECT * FROM spectrum WHERE x > ? AND x < ?
        `).all(minFrequency, maxFrequency) as Coordinate[];
    }
}