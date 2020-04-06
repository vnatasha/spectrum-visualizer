export interface Area {
    id: number;
    name: string;
}

export interface Response {
    areas: Array<Area>;
}

export interface OptionType {
    value: string;
    label: string;
}