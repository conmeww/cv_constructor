<template>
  <form ref="formBio" class="w-full">

    <div class="grid grid-cols-2 gap-6">
      <div class="col-span-full">
        <UiMainInput v-model="wantedJob" label="Wanted Job Title" placeholder="e.g. Teacher" showTooltip="true"
                     tooltipText="Tooltip text"/>
      </div>
      <div class="col-span-1">
        <UiMainInput v-model="firstName" label="First Name" placeholder="First Name"/>
      </div>
      <div class="col-span-1">
        <UiMainInput v-model="lastName" label="Last Name" placeholder="Last Name"/>
      </div>
      <div class="col-span-1">
        <UiMainInput v-model="email" label="Email" placeholder="Email"/>
      </div>
      <div class="col-span-1">
        <UiMainInput v-model="phone" label="Phone" placeholder="Phone"/>
      </div>
      <div class="col-span-1">
        <UiSelectRegion v-model="country" label="Country" placeholder="Country"/>

      </div>
      <div class="col-span-1">
        <UiMainInput v-model="city" label="City" placeholder="City"/>
      </div>
    </div>
    <div class="accordion min-h-[70px]">
      <div :class="{'accordion-show':accordionVisible === true}" class="accordion-content">
        <div class="grid grid-cols-2 gap-6 mt-6">
          <div class="col-span-1">
            <UiDatePicker present v-model="birthDate" label="Date of birth"/>
            <UiDatePicker  v-model="birthDate" label="Date of birth"/>
          </div>
          <div class="col-span-1">
            <UiMainInput label="Driving License" placeholder="Driving License"/>
          </div>
        </div>

      </div>
      <p class="w-full bg-white mt-6 h-[70px] text-left font-semibold text-blue-custom transition relative  cursor-pointer"
         @click="accordionVisible = !accordionVisible">
        {{ accordionVisible ? 'Hide' : 'Show' }} additional detail
        <ChevronDownIcon
            :class="{'rotate-180 delay-100':accordionVisible === true}"
            aria-hidden="true"
            class="pointer-events-auto inline h-6 w-6 text-blue-custom -top-[1px] delay-600 absolute left-44"
        />
      </p>
    </div>
  </form>
  <button @click="onInput($event)"> ADD</button>
</template>
<script lang="ts" setup>
import {ref, reactive, onMounted} from 'vue';
import {EducationForm, FormType, ID} from "~/types";
import {useFormStore, useMainStore} from "~/store";
import {nanoid} from "nanoid";
import {onClickOutside} from "@vueuse/core";

import {ChevronDownIcon} from "@heroicons/vue/20/solid";

let accordionVisible = ref(false)
// form fields
const school = ref('')

let wantedJob = ref()
let firstName = ref()
let lastName = ref()
let birthDate = ref()
let email = ref()
let phone = ref()
let country = ref()
let city = ref()
let drivingLicense = ref(false)

const onInput = (e: Event) => {

  formStore.addBioForm({
    id: nanoid(),
    //  wantedJob: wantedJob.value,
    // firstName: firstName.value,
    //  lastName: lastName.value,
    // birthDate: birthDate.value,
    // email: email.value,
    // phone: phone.value,
    // country: country.value,
    // city: city.value,
    //drivingLicense: drivingLicense.value
    wantedJob: 'Job title',
    firstName: 'First name',
    lastName: 'Last name',
    birthDate: '21.07.1991',
    email: 'mailmail@mail.com',
    phone: 89114567730,
    country: 'Russia',
    city: 'Moscow',
    drivingLicense: true
  })
};
// save data on click outside the form
const formBio = ref(null)
onClickOutside(formBio, (e: Event) => {
  formStore.updateForm('bio', {
    id: nanoid(),
    wantedJob: wantedJob.value,
    firstName: firstName.value,
    lastName: lastName.value,
    birthDate: birthDate.value,
    email: email.value,
    phone: phone.value,
    country: country.value,
    city: city.value,
    drivingLicense: drivingLicense.value
  })

})

const formStore = useFormStore();
const items = ref<EducationForm[]>([]);

const formType = reactive({
  value: {data: 'education'} as FormType,
})


</script>
<style scoped>
.accordion-content {
  -webkit-transition: max-height .4s;
  -moz-transition: max-height .4s;
  -ms-transition: max-height .4s;
  -o-transition: max-height .4s;
  transition: max-height .4s ease-in-out;
  overflow: hidden;
  max-height: 0;
}

.accordion-show.accordion-content {
  overflow: visible;
}

.accordion-show {
  max-height: 500px;
  height: auto;
}
</style>