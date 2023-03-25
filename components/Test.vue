<script lang="ts" setup>
import {reactive} from 'vue'
import {Container, Draggable} from 'vue3-smooth-dnd'
import {DropResult} from 'smooth-dnd'
import {nanoid} from "nanoid";
import type {Column, Task, SampleItem} from '../types/index';
import {useLocalStorage, useKeyModifier} from "@vueuse/core";


type SampleItemList = Array<SampleItem>

const items = reactive({
  value: [
    {id: nanoid(), data: 'Princess Mononoke'},
    {id: nanoid(), data: 'Spirited Away'},
    {id: nanoid(), data: 'My Neighbor Totoro'},
    {id: nanoid(), data: "Howl's Moving Castle"},
  ] as SampleItemList,
})

const onDrop = (dropResult: DropResult) => {
  items.value = applyDrag(items.value, dropResult)
}

const applyDrag = (arr: SampleItemList, dragResult: DropResult) => {
  console.log('applyDrag', dragResult)
  const {removedIndex, addedIndex, payload} = dragResult

  if (removedIndex === null && addedIndex === null) return arr
  const result = [...arr]
  let itemToAdd = payload

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0]
  }
  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd)
  }
  return result
}

defineExpose({
  Container,
  Draggable,
  onDrop,
  applyDrag,
  items,
})
</script>

<template>
  <div>

    <Container :drop-placeholder="{ className:
            `bg-primary bg-opacity-20
            border-dotted border-2
            border-primary rounded-lg mx-4 my-2`,
          animationDuration: '200',
          showOnTop: true }" drag-class="bg-primary dark:bg-primary
            border-2 border-primary-hover text-white
            transition duration-100 ease-in z-50
           " drag-handle-selector=".handle"
               drop-class="transition duration-100
            ease-in z-50"
               orientation="vertical" @drop="onDrop"
    >
      <Draggable v-for="(item, i) in items.value" :key="item.id"
                 class="drag-item bg-white p-2 mb-2 rounded-sm border border-gray-300 relative  cursor-pointer flex">
        <DraggableItem :item="item" @delete="items.value = items.value.filter(item => item.id !== $event)"/>

      </Draggable>
      <div>

        <DraggableAddItem @add="items.value.push($event)"/>
      </div>
    </Container>
  </div>
</template>

