<script lang="ts" setup>
import {SampleItem, ID} from '../../types/index';
import {onKeyStroke} from "@vueuse/core";
import {ref} from 'vue'
import {TransitionRoot} from '@headlessui/vue'

const props = defineProps<{
  item: SampleItem
}>()
const emit = defineEmits<{
  (e: "delete", payload: ID): void
}>()
const focused = ref(false)
let accordionVisible = ref(false)
const a = onKeyStroke("Backspace", (e) => {
  if (focused.value) emit("delete", props.item.id)
})
</script>
<template>
  <div class="relative h-auto" tabindex="0"
       @blur="focused = false"
      @focus="focused = true,accordionVisible = true">
    <DraggableDragHandle class="pr-2 absolute -left-6 top-6"/>
    <div class="accordion min-h-[70px]  cursor-pointer">
      <p class="accordion-name absolute pt-6 w-full h-[70px] text-center text-black font-semibold hover:text-blue-400 transition duration-400 ">(Not specified)</p>
      <div :class="{'accordion-show':accordionVisible === true}" class="accordion-content pt-16 bg-gray-100">

        <FormEducation />

      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-content {
  -webkit-transition: max-height .7s;
  -moz-transition: max-height .7s;
  -ms-transition: max-height .7s;
  -o-transition: max-height .7s;
  transition: max-height .7s ease-in-out;

  overflow: hidden;
  max-height: 0;
}

.accordion-show {
  max-height: 800px;
  height: auto;
}



</style>