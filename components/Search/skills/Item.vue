<template>
  <div class="p-3 pr-10 bg-gray-100 rounded relative ">
    <XMarkIcon aria-hidden="true" class="right-3 cursor-pointer absolute h-6 w-6 fill-gray-900" @click="emit('delete',skill)"/>
    <p class="text-gray-900 text-base">
{{skill.name}}
    </p>
  </div>
</template>
<script lang="ts" setup>
import {XMarkIcon} from '@heroicons/vue/20/solid';
import {ID} from "~/types";
import {useFormStore} from "~/store";
const props = defineProps<{
  skill: string,
}>()
const formStore = useFormStore()
const emit = defineEmits<{
  (e: "delete", payload: ID): void
}>()
</script>