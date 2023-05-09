<script lang="ts" setup>
import {nanoid} from "nanoid";import {reactive,ref } from 'vue'
import type {Task} from '../../types/index';
import {Container, Draggable} from "vue3-smooth-dnd";
import {PlusCircleIcon} from '@heroicons/vue/24/solid'
import {DraggableItem} from "../../types/index";
import {useDraggableStore,useFormStore} from "~/store";

const formStore = useFormStore()
const emit = defineEmits<{ (e: "add", payload: DraggableItem): void }>()
const props = defineProps<{
  addTitle: string,

}>()
const focused = ref(false)
const data = ref("")
const draggableStore = useDraggableStore()

function addItem(e: Event) {
  let parentId = nanoid()
  e.preventDefault()
  emit("add", {
    id:  parentId,
    data:formStore.addForm('education', parentId),
    content:formStore.itemsEdu.filter(item => item.parent === parentId)
  } as DraggableItem)
  data.value = ""
}


</script>

<template>

  <div class="bg-transparent duration-300 hover:bg-blue-50 cursor-pointer flex pl-6 p-3 justify-start items-center" @click="addItem">
    <PlusCircleIcon aria-hidden="true" class="h-7 w-7 fill-blue-custom font-bold mr-2"/>
    <button  class="text-blue-custom font-bold ">{{ addTitle }}</button>

  </div>
</template>
