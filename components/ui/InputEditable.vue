<script setup lang="ts">
import { ref } from 'vue';
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
  <div ref="titleElement" contenteditable spellcheck="false" @keydown.enter="validate">
    {{ title }}
  </div>
</template>