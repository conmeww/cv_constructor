<script lang="ts" setup>
import {QuestionMarkCircleIcon} from '@heroicons/vue/24/outline'
import {onMounted} from 'vue'
import {initFlowbite} from 'flowbite'



onMounted(() => {
  initFlowbite();
})
withDefaults(defineProps<{
  label?: string
  placeholder?: string,
  showTooltip:Boolean,
  tooltipText?: string,
}>(), {
  // defaults
})
const emit = defineEmits(['update'])

const updateValue = (e: Event) => {
  emit('update', (e.target as HTMLInputElement).value)
};

</script>
<template>
  <div class="w-full">
    <div class="flex items-center pb-1">
      <label :label="label" class="block text-base font-medium text-gray-500 transition-all
     duration-75 ease-in-out group-focus-within:text-blue-custom capitalize" for="4">{{ label }}</label>
      <div class="relative flex flex-col items-center group w-5 ml-2" v-if="showTooltip" >
        <QuestionMarkCircleIcon class="relative h-5 w-5 text-blue-custom  cursor-pointer"/>
        <!--- Tooltip --->
        <div class="w-full absolute bottom-0 duration-500 flex flex-col items-center invisible opacity-0 mb-7 group-hover:visible group-hover:opacity-100">
          <span class="whitespace-nowrap inline-block px-3 py-2 text-sm
    font-medium text-white   bg-gray-900
    rounded-lg shadow-sm  ">
        {{tooltipText}}
          </span>
          <div class="tooltip-arrow pointer-events-none  after:content-['']  after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-900" ></div>
        </div>
        <!--- End tooltip --->
      </div>
    </div>
    <input id="4" :placeholder="placeholder"   @input="updateValue($event)"
           class="w-full px-4  h-10 bg-gray-100 appearance-none border-b-2  border-transparent  focus:outline-none  focus:border-blue-custom focus:border-b-2"
           type="text"/>
  </div>
</template>
<style scoped>

</style>
