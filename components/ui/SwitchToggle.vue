<script lang="ts" setup>
withDefaults(defineProps<{
  label?: string

}>(), {
  // defaults
})
</script>
<template>
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" class="sr-only peer">
      <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300
        rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['']
         after:absolute after:top-[2px] after:left-[2px]
         after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4
          after:transition-all  peer-checked:bg-blue-custom"></div>
      <span class="ml-3 text-sm font-medium text-gray-500">{{ label }}</span>
    </label>
</template>
<style scoped>

</style>
