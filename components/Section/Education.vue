<script lang="ts" setup>
import {EducationForm, FormType} from "~/types";
import {FormEducation, FormPersonalDetails, UiMainInput} from "#components";
import {Container, Draggable} from "vue3-smooth-dnd";
import {reactive, ref} from "vue";
import {useFormStore} from "~/store";

withDefaults(defineProps<{
  sectionTitle?: string
}>(), {
  // defaults
})

const formStore = useFormStore();
const form  = ref<EducationForm[]>([]);
const formName = ref('')
</script>
<template>
  <div class="w-full">
    <h2 class="mb-3">{{ sectionTitle }}</h2>
    <p class="text-gray-400 text-base mb-5">A varied education on your resume sums up the value that your learnings and background will bring to job.</p>
    <DraggableContainer :formType="FormEducation"   addTitle="Add one more education"/>
  </div>

</template>
<style scoped></style>
