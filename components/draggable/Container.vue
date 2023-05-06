<script lang="ts" setup>
import {reactive,ref } from 'vue'
import {Container, Draggable} from 'vue3-smooth-dnd'
import {DropResult} from 'smooth-dnd'
import {nanoid} from "nanoid";
import type {DraggableItem,EducationForm} from '../../types/index';
import {useDraggableStore} from "~/store";
const draggableStore = useDraggableStore();
type DraggableItemList = Array<DraggableItem>
let focused = ref(false)

const items = reactive({
  value: [] as DraggableItemList,
})
const props = defineProps<{
  formType : string,
  addTitle: string,
}>()


const onDrop = (dropResult: DropResult) => {
  items.value = applyDrag(items.value, dropResult)
}

const applyDrag = (arr: DraggableItemList, dragResult: DropResult) => {

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
  draggableStore.updateOrder(result)
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
          animationDuration: '100',
          showOnTop: true }" drag-class="border border-primary-hover
            transition duration-100 ease-in z-50 opacity-80 shadow-md cursor-grabbing" drag-handle-selector=".handle"
               drop-class="transition duration-100 ease-in  z-50"
               orientation="vertical" @drop="onDrop">
      <Draggable v-for="(item, i) in items.value" :key="item.id"
                 class="drag-item  py-2 rounded-sm   relative  flex  h-auto">
        <DraggableItem  :formType="formType" :item="item" class="bg-white transition border-gray-100 border rounded-sm  duration-400 ease-in min-h-[70px]"
                       @delete="draggableStore.deleteItem($event), items.value = items.value.filter(item => item.id !== $event)"/>
      </Draggable>
      <div>
      </div>
    </Container>
    <DraggableAddItem @add="draggableStore.addItem($event), items.value.push($event)" :addTitle="addTitle" />
  </div>
</template>

<style scoped>
.smooth-dnd-container.vertical > .smooth-dnd-draggable-wrapper {
  overflow: visible;
}

.animated {
  pointer-events: none;
}
.ease-custom {
  transition-timing-function: cubic-bezier(.61, -0.53, .43, 1.43);
}
</style>