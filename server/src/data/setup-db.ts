import path from 'path';
import Database from 'better-sqlite3';
import { parseFile } from 'fast-csv';

const dbPath = path.resolve(__dirname, 'spectrum_db.db');
const areaCSVPath = path.resolve(__dirname, 'area.csv');
const spectrumCSVPath = path.resolve(__dirname, 'spectrum.csv');

const db = new Database(dbPath, { verbose: console.log });

const createTables = (): void => {
    const createAreaTable = `
        CREATE TABLE IF NOT EXISTS area (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            minFrequency REAL NOT NULL,
            maxFrequency REAL NOT NULL
        );
    `;
    
    const createSpectrumTable = `
        CREATE TABLE IF NOT EXISTS spectrum (
            x REAL NOT NULL,
            y REAL NOT NULL
        );
    `;
    
    db.prepare(createAreaTable).run();
    db.prepare(createSpectrumTable).run();
};

const importAreaData = (): void => {
    parseFile(areaCSVPath)
      .on('data', (row: any) => {
        const [ id, name, minFrequency, maxFrequency ] = row;
        db.prepare('INSERT INTO area (id, name, minFrequency, maxFrequency) VALUES (?, ?, ?, ?)').run(id, name, minFrequency, maxFrequency);
      })
      .on('end', () => {
        console.log('Area data imported successfully!');
      })
      .on('error', (err) => {
        console.error('Error reading area CSV:', err);
      });
  };

  const importSpectrumData = (): void => {
    parseFile(spectrumCSVPath)
      .on('data', (row: any) => {
        const [ x, y ] = row;
        db.prepare('INSERT INTO spectrum (x, y) VALUES (?, ?)').run(x, y);
      })
      .on('end', () => {
        console.log('Spectrum data imported successfully!');
      })
      .on('error', (err) => {
        console.error('Error reading spectrum CSV:', err);
      });
  };


const setupDatabase = (): void => {
    try {
        createTables();

        importAreaData();
        importSpectrumData();
        
        console.log('Database setup completed!');
    } catch (error) {
        console.error('Error setting up database:', error);
    }
};

setupDatabase();