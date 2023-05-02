<template>
  <div class="w-full">
    <label :label="label" class="block w-full pb-1 text-sm font-medium text-gray-500 transition-all
     duration-75 ease-in-out group-focus-within:text-blue-custom
      capitalize" for="4">Country</label>
    <Combobox v-model="selected">
      <div class="relative mt-1">
        <div
            class="relative w-full cursor-default overflow-hidden  bg-white text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
        >

          <ComboboxInput
              :displayValue="(person) => person.name"
              class="w-full px-4  h-10 bg-gray-50 appearance-none border-b-2  border-transparent  focus:outline-none focus:bg-white focus:border-blue-custom focus:border-b-2"
              @change="query = $event.target.value"
          />
          <ComboboxButton
              class="absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ChevronUpDownIcon
                aria-hidden="true"
                class="h-5 w-5 text-gray-400"
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
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <div
                v-if="filteredPeople.length === 0 && query !== ''"
                class="relative cursor-default select-none py-2 px-4 text-gray-700"
            >
              Nothing found.
            </div>

            <ComboboxOption
                v-for="person in filteredPeople"
                :key="person.id"
                v-slot="{ selected, active }"
                :value="person"
                as="template"
            >
              <li
                  :class="{
                  'bg-blue-custom text-white': active,
                  'text-gray-900': !active,
                }"
                  class="relative cursor-default select-none py-2 pl-10 pr-4"
              >
                <span
                    :class="{ 'font-medium': selected, 'font-normal': !selected }"
                    class="block truncate"
                >
                  {{ person.name }}
                </span>
                <span
                    v-if="selected"
                    :class="{ 'text-white': active, 'text-teal-600': !active }"
                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <CheckIcon aria-hidden="true" class="h-5 w-5"/>
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>

<script setup  lang="ts">
import {ref, computed} from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/vue/20/solid'

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
