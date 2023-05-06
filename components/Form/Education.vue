<template>
  <div class=" pb-12 w-full">
    <h2 class="text-base font-semibold leading-7 text-gray-900">Education</h2>
    <form class="mt-7 grid grid-cols-2 gap-3">
      <div>
        <UiMainInput v-model="school" label="School" placeholder="School" />
      </div>
      <div>
        <UiMainInput v-model="degree" label="Degree" placeholder="Degree" />
      </div>
      <div class="flex gap-3 items-end">
        <div>
          <UiDatePicker v-model="startDate" label="Start & End date" />
        </div>
        <div>
          <UiDatePicker v-model="endDate" />
        </div>
      </div>
      <div>
        <UiMainInput v-model="city" label="City" placeholder="City" />
      </div>
      <UiSwitchToggle v-model="currentlyStudying" label="Currently studying" />
    </form>
<button @click="test2">CLICK TO UPDATE FORM</button>
  </div>
</template>
<script lang="ts" setup>
import {ref, reactive, onMounted} from 'vue';
import {EducationForm, FormType} from "~/types";
import {useFormStore, useMainStore} from "~/store";
import {nanoid} from "nanoid";

// form fields
const school = ref('')
const degree = ref('')
const startDate = ref('')
const endDate = ref('')
const city = ref('')
const currentlyStudying = ref(true)


const onInput = (e: Event) => {
  e.preventDefault()
  formStore.addEducationForm({
    id: nanoid(),
    sort:1,
    type:formType.value.data,
    school: school.value,
    degree: degree.value,
    startDate: startDate.value,
    endDate: endDate.value,
    city: city.value,
    currentlyStudying: true
  })
};
const test2 = () => {
 // e.preventDefault()
  formStore.updateForm({
    id: nanoid(),
    sort:1,
    type:formType.value.data,
    school: school.value,
    degree: degree.value,
    startDate: startDate.value,
    endDate: endDate.value,
    city: city.value,
    currentlyStudying: true
  })

};


const formStore = useFormStore();
const items = ref<EducationForm[]>([]);

const formType= reactive({
  value: {data: 'education'} as FormType,
})
function test(e: Event) {

}

</script>