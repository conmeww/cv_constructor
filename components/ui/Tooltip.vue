<template>
   <div :id="tooltipId" role="tooltip"  class="absolute  z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    {{tooltipContent}}
    <div class="tooltip-arrow pointer-events-none  after:content-['']  after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-900" ></div>
  </div>

</template>
<script lang="ts" setup>
import {onMounted} from 'vue'
import {initFlowbite} from 'flowbite'

const props = defineProps<{
  tooltipContent: string,
  tooltipId: string
}>()
onMounted(() => {
  initFlowbite();
})
</script>
