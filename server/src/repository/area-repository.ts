import Database from 'better-sqlite3';
import { Area } from '../model';

export interface AreaRepository {
    findAll(): Area[];
    findById(id: number): Area | undefined;
}

export class SQLiteAreaRepository implements AreaRepository {
    private readonly db: Database.Database;

    constructor(dbPath: string) {
        this.db = new Database(dbPath);
    }

    findAll(): Area[] {
        const statement = this.db.prepare('SELECT * FROM area');
        return statement.all() as Area[];
    }

    findById(id: number): Area | undefined {
        const statement = this.db.prepare('SELECT * FROM area WHERE id = ?');
        const area = statement.get(id);

        return area ? area as Area : undefined;
    }
}