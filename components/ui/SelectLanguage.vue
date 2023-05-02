<template>
  <UiSelectBasic :items="items"/>
</template>

<script lang="ts" setup>
import { SelectOption} from "~/types";
type SelectOptions = Array<SelectOption>
const items = [
  'option 1',
  'option 2',
  'option 3',
  'option 4',
] as SelectOptions

</script>