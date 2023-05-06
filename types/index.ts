export type ID = string;

export interface Column {
    id: ID;
    title: string;

}

export interface Task {
    id: ID;
    title: string;

}

export interface DraggableItem {
    id: ID;
    data: string,
    content:string,
}

export interface SelectOption {
    data: string
}

export interface FormType {
    data: string
}
// for pinia

export interface EducationForm {
    id: ID,
    sort:number,
    parent?:string,
    type?:string,
    school: string,
    degree: string,
    startDate: string,
    endDate: string,
    city: string,
    currentlyStudying: Boolean
}
export interface EducationFormList {
    id: ID,
    sort:number,
    forms:EducationForm[]
}

export interface EmploymentHistoryForm {
    id: ID,
    sort:number,
    parent?:string,
    type?:string,
    school: string,
    degree: string,
    startDate: string,
    endDate: string,
    city: string,
    currentlyStudying: Boolean
}
export interface Item {
    id: number;
    name: string;
    description?: string;
    quantity: number;
    createdAt: Date;
    deletedAt?: Date;
}

export function generateFakeData(): Item {
    return {
        id: Math.random(),
        quantity: Math.random(),
        name: ' faker.lorem.word()',
        description: 'faker.lorem.words()',
        createdAt: new Date(),
    };
}