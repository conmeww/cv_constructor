<template>
  <div class="border-b border-gray-900/10 pb-12 w-full">
    <h2 class="text-base font-semibold leading-7 text-gray-900">Employment History</h2>
    <div class="mt-7 grid grid-cols-2 gap-3">
      <div class="col-span-1">
        <UiMainInput label="Job Title" placeholder="Job Title"/>
      </div>
      <div class="col-span-1">
        <UiMainInput label="Employer" placeholder="Employer"/>
      </div>
      <div class="flex gap-3 items-end relative col-span-1">
        <div class="col-span-1">
          <UiDatePicker label="Start & End date"/>
        </div>
        <div>
          <UiDatePicker/>
        </div>
      </div>
      <div class="col-span-1">
        <UiMainInput label="City" placeholder="City"/>
      </div>
      <div class="col-span-2">
        <UiSwitchToggle label="Currently work here"/>
      </div>

      <div class="col-span-2">
        <UiMainTextarea label="Description"/>
      </div>
    </div>
  </div>

  <!--  <div class="flex w-full">-->
  <!--    <div class="columns-2 flex items-end">-->
  <!--      <div class="w-full">-->
  <!--        <UiMainInput label="School" placeholder="School"/>-->
  <!--      </div>-->
  <!--      <div class="w-full">-->
  <!--        <UiMainInput label="Degree" placeholder="Degree"/>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div class="columns-2 flex items-end">-->
  <!--      <div class="columns-2 flex items-end gap-3">-->
  <!--        <div class="w-full ">-->
  <!--          <UiDatePicker label="Start & End Date"/>-->
  <!--        </div>-->
  <!--        <div class="w-full">-->
  <!--          <UiDatePicker/>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="w-full">-->
  <!--        <UiSelectRegion label="Region" placeholder="Region"/>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->

  <!--  <div class="columns-1">-->
  <!--    <div class="w-full">-->
  <!--      <UiMainTextarea label="Description"/>-->
  <!--    </div>-->
  <!--  </div>-->

</template>