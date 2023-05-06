import {EducationForm, generateFakeData, Item, DraggableItem, FormType, ID} from "../types/index";
import {defineStore} from "pinia";
import {FormEducation} from "#components";
import {nanoid} from "nanoid";

export type RootState = {
    items: Item[];
};
export type FormState = {
    items: EducationForm[];
    type: FormType,
    id: string
};
export const useFormStore = defineStore({
    id: "formStore",
    state: () =>
        ({
            items: [],
            id: '',
            type: ''
        } as FormState),
    actions: {
        addEducationForm(item: EducationForm) {
            if (!item) return;
            this.items.push(item);
        },
        addForm(type: string, id: string) {
            switch (type) {
                case 'education' :
                    this.addEducationForm({
                        id: nanoid(),
                        parent: id,
                        sort: 1,
                        type: '',
                        school: '',
                        degree: '',
                        startDate: '',
                        endDate: '',
                        city: '',
                        currentlyStudying: false
                    })


            }
        },
        updateForm(item: EducationForm) {
            let i = this.items.findIndex((item) => item.id === item.id);
            this.items[i] = item

        }
    },
});
export type DraggableState = {
    items: DraggableItem[];
};
export const useDraggableStore = defineStore({
    id: "draggableStore",
    state: () =>
        ({
            items: [],
        } as DraggableState),
    actions: {
        updateOrder(items: DraggableItem[]) {
            this.items = items
        },
        addItem(item: DraggableItem) {
            if (!item) return;
            this.items.push(item);
        },
        deleteItem(id: string) {
            console.log(id)
            const index = this.findIndexById(id);
            if (index === -1) return;
            this.items.splice(index, 1);
            this.updateOrder(this.items)
        },
        findIndexById(id: string) {
            return this.items.findIndex((item) => item.id === id);
        },
    },
});
export const useMainStore = defineStore({
    id: "mainStore",
    state: () =>
        ({
            items: [],
        } as RootState),

    actions: {
        createNewItem(item: Item) {

            //  if (!item) return;
            // this.items.push(item);
        },

        updateItem(id: string, payload: Item) {
            if (!id || !payload) return;
            const index = this.findIndexById(id);
            if (index !== -1) {
                this.items[index] = generateFakeData();
            }
        },

        deleteItem(id: string) {
            const index = this.findIndexById(id);
            if (index === -1) return;
            this.items.splice(index, 1);
        },

        findIndexById(id: string) {
            return this.items.findIndex((item) => item.id === id);
        },
    },
});