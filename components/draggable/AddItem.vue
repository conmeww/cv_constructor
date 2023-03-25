<script setup lang="ts">

import type { Task } from '../../types/index';

const emit = defineEmits<{(e: "add", payload: Task): void}>()

const focused = ref(false)
const data = ref("")

function createTask(e: Event) {
  if (data.value.trim()) {
    e.preventDefault()
    emit("add", {
     data:data.value.trim(),
      createdAt: new Date(),
      id:  Math.floor(Math.random() *12222222222224)
    } as Task)
  }
  data.value = ""
}
</script>

<template>
  <div>
    <textarea
        v-model="data"
        @keydown.tab="createTask"
        @keyup.enter="createTask"
        class="focus:bg-white overflow-hidden focus:shadow resize-none rounded w-full border-none bg-transparent p-2 cursor-pointer"
        :class="{
        'h-7': !focused,
        'h-20': focused,
      }"
        style="outline: none !important; background: red"
        @focus="focused = true"
        @blur="focused = false"
        :placeholder="!focused ? '+ Add A Card' : 'Enter a title for this card'"/>
  </div>
</template>
