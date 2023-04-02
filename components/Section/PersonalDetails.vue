<script lang="ts" setup>
withDefaults(defineProps<{
  sectionTitle?: string
}>(), {
  // defaults
})
</script>
<template>
  <div class="w-full">
    <h2 class="mb-5">{{ sectionTitle }}</h2>
    <FormPersonalDetails/>
  </div>
</template>
<style scoped>
</style>
