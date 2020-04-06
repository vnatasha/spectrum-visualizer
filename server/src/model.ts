export interface Area {
    id: number;
    name: string;
    frequencies: number[];
}

export interface Coordinate {
    x: number;
    y: number;
}

export interface SpectrumData {
    id: string;
    date: string;
    spectrum: Coordinate[];
}