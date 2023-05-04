<template>
  <div class=" pb-12 w-full">
    <h2 class="text-base font-semibold leading-7 text-gray-900">Education</h2>
    <div class="mt-7 grid grid-cols-2 gap-3">
      <div>
        <UiMainInput v-model="email" label="School" placeholder="School"
                     type="text"
                     @input="onInput"/>
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
      <UiSwitchToggle label="Currently studying"/>
    </div>
  </div>
  <button @click="test">dcfvgbhmk</button>
</template>
<script lang="ts" setup>
import {ref, reactive, onMounted} from 'vue';
import {EducationForm, generateFakeData, Item, SampleItem, Task} from "~/types";
import {useFormStore, useMainStore} from "~/store";
import {nanoid} from "nanoid";

const email = ref('')
// output value key by key
const onInput = (e: { target: { value: string } }) => {
  email.value = e.target.value;
};


type EducationFormsList = Array<EducationForm>

const items = reactive({
  value: [
    {id: nanoid(), school: ''},
  ] as EducationFormsList,
})

function test(e: Event) {

  e.preventDefault()
  items.value.push({
    id: nanoid(),
    school: email.value
  })
  console.log(items.value)
}

</script>