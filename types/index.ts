export type ID = string;

export interface Column{
    id: ID;
    title: string;
    tasks: Task[];
}

export interface Task{
    id: ID;
    title: string;
    createdAt: Date;
}

export interface SampleItem {
    id: ID;
    data: string
}
export interface SelectOption {
    data: string
}
