<script lang="ts" setup>
import {SampleItem, SelectOption} from "~/types";
import {FormEducation, FormPersonalDetails, UiMainInput} from "#components";
import {Container, Draggable} from "vue3-smooth-dnd";

type SelectOptions = Array<SelectOption>
const formEducation = FormEducation
const items = [
  'option 1',
  'option 2',
  'option 3',
  'option 4',
] as SelectOptions

defineExpose({
  formEducation
})
</script>
<template>
  <div class="ml-9">
    <DraggableContainer :formEducation="formEducation" addTitle="Add one more education"/>
  </div>
</template>
<style scoped></style>
