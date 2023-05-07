<template>
  <ul class="bg-gray-100 max-h-60 overflow-y-scroll shadow-xl">
    <li v-for="item in items"
        class="text-gray-900 px-4 py-2 hover:bg-sky-100   hover:text-blue-custom-light cursor-pointer"
        @click="emit('add', item)">{{ item.name }}
    </li>
  </ul>
</template>
<script lang="ts" setup>
import {reactive, ref} from "vue";
import {DraggableItem, ID, Skill} from "~/types";

const emit = defineEmits<{
  (e: "add", payload: ID): void
}>()


const props = defineProps<{
  items: [],
}>()

</script>