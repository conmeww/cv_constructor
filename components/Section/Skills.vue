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

</script>
<template>
  <div class="w-full">
    <h2 class="mb-3">{{ sectionTitle }}</h2>
    <p class="text-gray-400 text-base mb-5">Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing (especially when applying via an online system).</p>
<SearchSkillsContainer />
  </div>

</template>
<style scoped></style>
