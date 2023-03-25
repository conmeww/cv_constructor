<script setup lang="ts">
import { Task, ID } from '../../types/index';
import {onKeyStroke} from "@vueuse/core";

const props = defineProps<{
    task: Task
}>()

const emit = defineEmits<{
  (e: "delete", payload: ID): void
}>()

const focused = ref(false)

const a = onKeyStroke("Backspace", (e) => {
  if (focused.value) emit("delete", props.task.id)
})

</script>

<template>
    <div :title="new Date(task.createdAt).toLocaleDateString()" 
     class="drag-item bg-white p-2 mb-2 rounded-sm border border-gray-300 relative  cursor-pointer flex"
     @focus="focused = true" 
     @blur="focused = false"
     tabindex="0">  
      <DraggableDragHandle class="pr-2 absolute -left-5"/>
      <span>{{ task.title }}</span>
    </div>
  </template>

<style scoped>

.drag-item:hover .drag-handle{

}
.sortable-drag .drag-item {

}
.sortable-ghost .drag-item {
  position: relative;
}
.sortable-ghost .drag-item::after {
  /*content: "";*/
  /*@apply absolute top-0 bottom-0 left-0 right-0 bg-gray-50 border-0 rounded;*/
}

.drag-item:focus, .drag-item:focus-visible {
  /*@apply outline-gray-400 !important;*/
  /*outline: gray auto 1px;*/
}

</style>