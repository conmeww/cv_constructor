<template>
  <div class="w-full">
    <label  class="block text-base font-medium text-gray-500 transition-all
     duration-75 ease-in-out group-focus-within:text-blue-custom capitalize">{{label}}</label>
    <Combobox v-model="selected">
      <div class="relative mt-0">
        <div class="relative w-full cursor-default overflow-hidden  bg-white text-left h-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <ComboboxButton
              class="relative inset-y-0 w-full flex items-center">
          <div class="expand w-full rounded inline-block overflow-hidden relative" tabindex="0">
            <ComboboxInput
                :displayValue="(person) => person.name"
                class="w-full px-4 cursor-pointer h-10 bg-gray-custom
                appearance-none
                  focus:outline-none"
                @change="query = $event.target.value" :placeholder="placeholder"/>
            <div class="block absolute border-expand bg-blue-custom w-full"></div>
          </div>
            <ChevronDownIcon
                aria-hidden="true"
                class="h-5 w-5 text-gray-400 absolute right-4"
            />
          </ComboboxButton>
        </div>
        <TransitionRoot
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            @after-leave="query = ''"
        >
          <ComboboxOptions
              class="absolute  z-10 max-h-60 w-full
               overflow-auto  bg-gray-custom text-base rounded mt-1  shadow-md focus:outline-none">
            <div
                v-if="filteredPeople.length === 0 && query !== ''"
                class="relative cursor-default select-none py-2 px-4 text-gray-900">
              Nothing found.
            </div>
            <ComboboxOption
                v-for="person in filteredPeople"
                :key="person.id"
                v-slot="{ selected, active }"
                :value="person"
                as="template">
              <li
                  class="relative cursor-pointer
                    select-none px-4 py-2"
                  :class="{ 'bg-blue-custom text-white': selected, 'bg-gray-custom hover:bg-sky-100 hover:text-blue-custom-light': !selected }">
                <span
                    :class="{ 'font-medium': selected, 'font-normal': !selected }"
                    class="block truncate">
                  {{ person.name }}
                </span>
                <!--                <span-->
                <!--                    v-if="selected"-->

                <!--                    class="absolute inset-y-0 left-0 flex items-center pl-3"-->
                <!--                >-->
                <!--                  <CheckIcon aria-hidden="true" class="h-5 w-5"/>-->
                <!--                </span>-->
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, defineProps, defineEmits} from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'
import {CheckIcon, ChevronDownIcon} from '@heroicons/vue/20/solid'

withDefaults(defineProps<{
  label?: string
  placeholder?: string,
  modelValue: string;
}>(), {
})
defineEmits(["update:modelValue"]);
const people = [
  {id: 1, name: 'Wade Cooper'},
  {id: 2, name: 'Arlene Mccoy'},
  {id: 3, name: 'Devon Webb'},
  {id: 4, name: 'Tom Cook'},
  {id: 5, name: 'Tanya Fox'},
  {id: 6, name: 'Hellen Schmidt'},
]

let selected = ref(people[0])
let query = ref('')

let filteredPeople = computed(() =>
    query.value === ''
        ? people
        : people.filter((person) =>
            person.name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.value.toLowerCase().replace(/\s+/g, ''))
        )
)
</script>
<style scoped>
.expand input {
  padding: 10px;
  border: none;
}

.border-expand {
  height: 3px;
  top: 94%;
  transform: scaleX(0);
  transition: transform 0.2s;
  transform-origin: center;
}

input:focus + .border-expand, .expand:focus .border-expand {
  transform: scaleX(1);
  border-width: 0;
}
</style>