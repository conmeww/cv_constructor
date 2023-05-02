<script lang="ts" setup>
import {ref} from 'vue'
import {ChevronDownIcon} from "@heroicons/vue/20/solid";

let accordionVisible = ref(false)
</script>
<template>
  <div class="border-b border-gray-900/10 pb-12 w-full">
    <div class=" grid grid-cols-2 gap-6">
      <div class="col-span-full">
        <UiMainInput label="Wanted Job Title" placeholder="e.g. Teacher" showTooltip="true" tooltipText="Tooltip text"/>
      </div>
      <div>
        <UiMainInput label="First Name" placeholder="First Name"/>
      </div>
      <div>
        <UiMainInput label="Last Name" placeholder="Last Name"/>
      </div>
      <div>
        <UiMainInput label="Email" placeholder="Email"/>
      </div>
      <div>
        <UiMainInput label="Phone" placeholder="Phone"/>
      </div>
      <div>
        <UiMainInput label="Country" placeholder="Country"/>
      </div>
      <div>
        <UiMainInput label="City" placeholder="City"/>
      </div>
    </div>
    <div class="accordion min-h-[70px]  cursor-pointer">

      <div :class="{'accordion-show':accordionVisible === true}" class="accordion-content ">

        <div class="grid grid-cols-2 gap-6 mt-6">
          <div class="col-span-1">
            <UiMainInput label="Date Of Birth" placeholder="Date Of Birth"
                         />
          </div>
          <div class="col-span-1">
            <UiMainInput label="Driving License" placeholder="Driving License"/>
          </div>
    
        </div>

      </div>
      <p class="w-full mt-6 h-[70px] text-left font-semibold text-blue-400 transition duration-400 "
         @click="accordionVisible = !accordionVisible">
        {{accordionVisible ? 'Hide' : 'Show'}} additional detail

        <ChevronDownIcon aria-hidden="true" class="inline h-7 w-7 fill-blue-400" />

      </p>
    </div>
  </div>


</template>

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

.accordion-show {
  max-height: 500px;
  height: auto;
}
</style>