<template>
  <label for="select-basic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
  <select  id="select-basic" class="bg-gray-50
  text-gray-900 text-sm focus:bg-white focus:border-b focus:ring-blue-custom focus:boring-blue-custom block w-full p-2.5
 ">
    <option v-for="item in props.items" :value="item">{{item}}</option>
  </select>

</template>

<script setup  lang="ts">
import {SelectOption} from "~/types";
const props = defineProps<{
  items: SelectOption
}>()
</script>
