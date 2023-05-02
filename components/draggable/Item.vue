<script lang="ts" setup>
import {SampleItem, ID} from '../../types/index';
import {onKeyStroke} from "@vueuse/core";
import {ref} from 'vue'
import {TransitionRoot} from '@headlessui/vue'
import {TrashIcon, ChevronDownIcon} from '@heroicons/vue/24/outline'

const props = defineProps<{
  item: SampleItem,
  formEducation: string,

}>()
const emit = defineEmits<{
  (e: "delete", payload: ID): void
}>()
const activeInput = ref(false)
const focused = ref(false)
let accordionVisible = ref(false)
const a = onKeyStroke("Backspace", (e) => {
  if (focused.value) emit("delete", props.item.id)
})

</script>
<template>
  <div class="relative h-auto" tabindex="0"
       @blur="focused = false"
       @focus="focused = true">
    <DraggableDragHandle class="pr-2 absolute -left-8 top-6"/>
    <div class="accordion min-h-[70px]  cursor-pointer">
      <p class="accordion-name absolute pt-7 z-20 w-full h-[70px] text-left pl-6 text-black font-semibold hover:text-blue-custom transition duration-400 "
         @click="accordionVisible = !accordionVisible">
        (Not specified)</p>
      <ChevronDownIcon
          :class="{'rotate-180 delay-100':accordionVisible === true}"
          aria-hidden="true"
          class="pointer-events-auto  h-5 w-5 absolute right-10 top-8 text-gray-400 delay-200"
      />
      <div :class="{'accordion-show':accordionVisible === true}"
           class=" accordion-content pt-20 px-6 bg-white border border-gray-100">
        <div class="absolute w-7 h-7 -right-9 top-6 text-center" data-tooltip-target="tooltip-delete">
          <TrashIcon aria-hidden="true" class="h-7 w-7 cursor-pointer stroke-gray-400 hover:stroke-blue-custom"
                     @click="$emit('delete',props.item.id)"/>
        </div>
        <UiTooltip tooltipContent="Delete" tooltipId="tooltip-delete"/>
        <div :class="{'opacity-0 invisible duration-100':accordionVisible === false}"
             class="duration-600 transition-all delay-300">
          <component :is="formEducation"></component>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-content {
  -webkit-transition: max-height .8s;
  -moz-transition: max-height .8s;
  -ms-transition: max-height .8s;
  -o-transition: max-height .8s;
  transition: max-height .8s ease-in-out;


  max-height: 0;
}

.accordion-show {
  max-height: 800px;
  height: auto;
}


</style>