<script lang="ts" setup>
import { EmploymentHistoryForm} from "~/types";
import { FormEmploymentHistory} from "#components";

import {reactive, ref} from "vue";
import {useFormStore} from "~/store";

withDefaults(defineProps<{
  sectionTitle?: string
}>(), {
  // defaults
})

const formStore = useFormStore();
const form  = ref<EmploymentHistoryForm[]>([]);
const formName = ref('')
</script>
<template>
  <div class="w-full">
    <h2 class="mb-3">{{ sectionTitle }}</h2>
    <p class="text-gray-400 text-base mb-5">Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).</p>
    <DraggableContainer :formType="FormEmploymentHistory"   addTitle="Add one more education"/>
  </div>

</template>
<style scoped></style>
