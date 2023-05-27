<script lang="ts" setup>
import {QuestionMarkCircleIcon} from '@heroicons/vue/24/outline'

withDefaults(defineProps<{
  label?: string
  placeholder?: string,
  showTooltip: Boolean

}>(), {
  // defaults
})
</script>
<template>
  <div class="w-full">
    <div class="flex items-center pb-2">
      <label :label="label" class="block text-sm font-medium text-gray-500 transition-all
     duration-75 ease-in-out group-focus-withiborder-blue-custom capitalize" for="4">{{ label }}</label>
      <div v-if="showTooltip" class="relative flex flex-col items-center group">
        <QuestionMarkCircleIcon class="relative  w-border-blue-custom ml-2 cursor-pointer"/>
        <div class="w-64 absolute bottom-0 flex flex-col items-center hidden mb-6 ml-1 group-hover:flex">
          <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded">A top aligned tooltip.</span>
          <div class="w-3 h-3 -mt-2 rotate-45 bg-black rounded"></div>
        </div>
      </div>
    </div>



    <div class="expand w-full rounded h-44 inline-block overflow-hidden relative" tabindex="0">
    <textarea :placeholder="placeholder"
              class="resize-none rounded overflow-y-scroll w-full px-4 pt-2 h-44 bg-gray-custom
              appearance-none  focus:outline-none  "
    ></textarea>
      <div class="block absolute border-expand   bg-blue-custom w-full"></div>
    </div>
  </div>
</template>
<style scoped>

.expand textarea {
  padding: 10px;
  border: none;
}
.border-expand {
  height: 3px;
  bottom: 0px;
  transform: scaleX(0);
  transition: transform 0.2s;
  transform-origin:  center;
}
textarea:focus + .border-expand, .expand:focus .border-expand{
  transform: scaleX(1);
  border-width: 0;
}


</style>
