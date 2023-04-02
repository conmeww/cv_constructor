<script lang="ts" setup>
import {reactive,ref } from 'vue'
import {Container, Draggable} from 'vue3-smooth-dnd'
import {DropResult} from 'smooth-dnd'
import {nanoid} from "nanoid";
import type {SampleItem} from '../../types/index';

import { TransitionRoot } from '@headlessui/vue'

type SampleItemList = Array<SampleItem>
let focused = ref(false)
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
    <Container class="h-auto" :drop-placeholder="{ className:
            `bg-gray-300 bg-opacity-20 rounded-sm`,
          animationDuration: '200',
          showOnTop: true }" drag-class="border border-primary-hover
            transition duration-100 ease-in z-50 opacity-90 cursor-grabbing" drag-handle-selector=".handle"
               drop-class="transition duration-100 ease-in  z-50"
               orientation="vertical" @drop="onDrop">
      <Draggable v-for="(item, i) in items.value" :key="item.id"
                 class="drag-item   rounded-sm   relative  flex py-2 h-auto">
        <DraggableItem  :item="item" class="bg-white transition  border rounded-sm  duration-400 ease-in min-h-[70px]"
                       @delete="items.value = items.value.filter(item => item.id !== $event)"/>
      </Draggable>
      <div>
      </div>
    </Container>
    <DraggableAddItem @add="items.value.push($event)"/>
  </div>
</template>

<style scoped>
.smooth-dnd-container.vertical > .smooth-dnd-draggable-wrapper {
  overflow: visible;
}


.ease-custom {
  transition-timing-function: cubic-bezier(.61, -0.53, .43, 1.43);
}
</style>