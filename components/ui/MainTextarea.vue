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
     duration-75 ease-in-out group-focus-within:text-blue-400 capitalize" for="4">{{ label }}</label>
      <div v-if="showTooltip" class="relative flex flex-col items-center group">
        <QuestionMarkCircleIcon class="relative  w-4 text-blue-500 ml-2 cursor-pointer"/>
        <div class="w-64 absolute bottom-0 flex flex-col items-center hidden mb-6 ml-1 group-hover:flex">
          <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded">A top aligned tooltip.</span>
          <div class="w-3 h-3 -mt-2 rotate-45 bg-black rounded"></div>
        </div>
      </div>
    </div>
    <textarea :placeholder="placeholder"
              class="resize-y rounded-am  w-full px-4 pt-2 h-10 bg-gray-50 appearance-none border-b-2  border-transparent  focus:outline-none focus:bg-white focus:border-blue-400 focus:border-b-2"
    ></textarea>
  </div>
</template>
<style scoped>

</style>
