<template>
  <div class=" pb-12 w-full">
    <h2 class="text-base font-semibold leading-7 text-gray-900">Education</h2>
    <form class="mt-7 grid grid-cols-2 gap-3" ref="formEdu">
      <div>
        <UiMainInput v-model="school" label="School" placeholder="School" />
      </div>
      <div>
        <UiMainInput v-model="degree" label="Degree" placeholder="Degree" />
      </div>
      <div class="flex gap-3 items-end relative">
        <p class="absolute left-0 top-0 block text-sm font-medium text-gray-500 transition-all duration-75 ease-in-out group-focus-within:text-blue-custom capitalize">Start & End date</p>

        <div class="w-full">
          <UiDatePicker v-model="startDate" label="" />
        </div>
        <div class="w-full">
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
import {onClickOutside} from "@vueuse/core";

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
// save data on click outside the form
const formEdu = ref(null)
onClickOutside(formEdu, (e: Event) => {
  // e.preventDefault()
  formStore.updateForm('education', {
    id: nanoid(),
    sort: 1,
    type: formType.value.data,
    school: school.value,
    degree: degree.value,
    startDate: startDate.value,
    endDate: endDate.value,
    city: city.value,
    currentlyStudying: true

    // sort:1,
    // type:'type',
    // school: 'High School',
    // degree:'Bachelor',
    // startDate: 'January 2006',
    // endDate:'March 2010',
    // city: 'Moscow',
    // currentlyStudying: false
  })
})




const formStore = useFormStore();
const items = ref<EducationForm[]>([]);

const formType= reactive({
  value: {data: 'education'} as FormType,
})
function test(e: Event) {

}

</script>