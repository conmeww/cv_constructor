import {EducationForm, generateFakeData, Item, DraggableItem, FormType, Skill, BioForm} from "../types/index";
import {defineStore} from "pinia";
import {FormEducation} from "#components";
import {nanoid} from "nanoid";

export type RootState = {
    items: Item[];
};
export type FormState = {
    itemsEdu: EducationForm[]
    itemsBio: BioForm[]
    type: FormType
    id: string,
    skills: Skill[]
};
export const useFormStore = defineStore({
    id: "formStore",
    state: () =>
        ({
            itemsEdu: [],
            itemsBio: [],
            id: '',
            type: '',
            skills: []
        } as FormState),
    actions: {
        addEducationForm(item: EducationForm) {
            if (!item) return;
            this.itemsEdu.push(item);
        },
        addBioForm(item: BioForm) {
            if (!item) return;
            this.itemsBio.push(item);
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
        //  updateForm(item: EducationForm) {
        //     let i = this.itemsEdu.findIndex((item) => item.id === item.id);
        //    this.itemsEdu[i] = item
        // },
        updateForm(type: string, item: any) {
            switch (type) {
                case 'bio' :
                    if (this.itemsBio.findIndex((item) => item.id === item.id) !== -1) {
                        let i = this.itemsBio.findIndex((item) => item.id === item.id);
                        this.itemsBio[i] = item
                    } else {
                        this.addBioForm(item)
                    }
                case 'education' :
                    if (this.itemsEdu.findIndex((item) => item.id === item.id) !== -1) {
                        let i = this.itemsEdu.findIndex((item) => item.id === item.id);
                        this.itemsEdu[i] = item
                    }

            }

            //  console.log(this.itemsBio.findIndex((item) => item.id === item.id))

        },
        addSkill(skill: Skill) {
            this.skills.push(skill);
        },
        deleteForm(id: string) {
            const index = this.findIndexById(id);
            if (index === -1) return;
            this.itemsEdu.splice(index, 1);

           // this.itemsEdu = this.itemsEdu.filter(item => item.parent !== id)
            console.log(this.itemsEdu,id)
            return this.itemsEdu
        },
        deleteSkill(skill: Skill) {
            this.skills = this.skills.filter(item => item !== skill)
            return this.skills
        },
        findIndexById(id: string) {
            return this.itemsEdu.findIndex((item) => item.parent === id);
        },

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

            const index = this.findIndexById(id);
            if (index === -1) return;
            this.items.splice(index, 1);
            this.updateOrder(this.items)
            useFormStore().deleteForm(id)

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