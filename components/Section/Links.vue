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
    <p class="text-gray-400 text-base mb-5">
      You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website</p>

  </div>

</template>
<style scoped></style>
