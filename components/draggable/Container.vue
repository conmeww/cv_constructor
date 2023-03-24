
<script setup lang="ts">
import { ref } from 'vue'
import { nanoid } from 'nanoid'
import draggable from 'vuedraggable'
import type { Column, Task } from '../../types/index';
import {useLocalStorage,useKeyModifier} from "@vueuse/core";
const columns = useLocalStorage<Column[]>("trelloBoard",[
    {
        id: nanoid(),
        title: 'Backlog',
        tasks: [
        { id: nanoid(), title: 'Create marketing landing page', createdAt: new Date() },
        { id: nanoid(), title: 'Develop cool new feature', createdAt: new Date() },
        { id: nanoid(), title: 'Fix page nav bug', createdAt: new Date() }
        ]
    },

])

const alt = useKeyModifier("Alt")
//
// function createColumn() {
//   const column: Column = {
//     id: nanoid(),
//     title: '',
//     tasks: [],
//   }
//   columns.value.push(column)
//
//   // nextTick(() => {
//   //       (document.querySelector('.column:last-of-type .title-input') as HTMLInputElement).focus()
//   //   })
// }

</script>

<template>
    <div class="flex w-full">
        <draggable
            v-model="columns"
            group="columns"
            item-key="id"
            :animation="150"
            handle=".dra-handle"
            class="flex w-full">
            <template #item="{element: column} : {element : Column}">
                <div class="column bg-gray-200 p-5 rounded w-full">



                    <draggable
                        v-model="column.tasks"
                        :group="{ name: 'tasks', pull: alt ? 'clone' : true }"
                        item-key="id"
                        :animation="150"
                        handle=".handle"
                        >
                        <template #item="{element: task} : {element : Task}">
                            <div>


                                <DraggableItem  :task="task"  @delete="column.tasks = column.tasks.filter(item => item.id !== $event)" />
                            </div>
                        </template>

                    </draggable>

                    <footer>
                        <DraggableAddItem @add="column.tasks.push($event)" />
                    </footer>
                </div>
            </template>    
        </draggable> 

    </div>
</template>



<style lang="scss" scoped>

</style>