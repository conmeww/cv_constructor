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
export interface EducationForm {
    id:ID,
    school: string,
 //   degree:string,
 //   startDate:string,
  //  endDate:string,
  //  city:string,
   // currentlyStudying:Boolean
}
// for pinia

export interface Item {
    id:number;
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
        name:' faker.lorem.word()',
        description: 'faker.lorem.words()',
        createdAt: new Date(),
    };
}