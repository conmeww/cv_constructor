<template>
  <div class=" pb-12 w-full">
    <h2 class="text-base font-semibold leading-7 text-gray-900">Education</h2>
    <div class="mt-7 grid grid-cols-2 gap-3">
      <div>
        <UiMainInput label="School" placeholder="School" @update="getData" v-model="form.value.city"/>
      </div>
      <div>
        <UiMainInput label="Degree" placeholder="Degree"/>
      </div>
      <div class="flex gap-3 items-end">
        <div>
          <UiDatePicker label="Start & End date"/>
        </div>
        <div>
          <UiDatePicker/>
        </div>
      </div>
      <div>
        <UiMainInput label="City" placeholder="City"/>
      </div>
   <UiSwitchToggle label="Currently studying" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref,reactive} from 'vue';
import {EducationForm} from "~/types";
import {nanoid} from "nanoid";



let form = reactive({
  value: [
    {city: ''},
  ] as EducationForm,
})
const getData = (e) =>{
  console.log(form.value)
}


</script>