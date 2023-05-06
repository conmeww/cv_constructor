<script setup lang="ts">
import { ref } from 'vue';
import {PencilSquareIcon} from '@heroicons/vue/24/solid'
const props = defineProps<{
  placeholder: String
}>()

let title = props.placeholder
const titleElement = ref(null)

function validate(event : Event) {
  (event.target as HTMLInputElement).blur()
  title = titleElement.value.innerText.trim()
}

defineExpose({ titleElement })
</script>

<template>
  <div class="relative group cursor-pointer inline-block">
   <p ref="titleElement" class="px-4 w-auto focus:outline-none focus:border-b-2 border-blue-custom" contenteditable spellcheck="false" @keydown.enter="validate">
    {{ title }}
    <PencilSquareIcon class="h-6 w-6  absolute top-[6px] -right-5 opacity-0 transition duration-100 group-hover:opacity-100 text-blue-custom ml-2 cursor-pointer"/>

  </p>
  </div>
</template>