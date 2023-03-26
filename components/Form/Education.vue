<template>
  <div class="border-b border-gray-900/10 pb-12 w-[500px]">
    <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>


    <div class="mt-10 grid grid-cols-2 gap-3">
      <div>
        <UiMainInput label="School" placeholder="School"/>
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
        <UiMainInput label="School" placeholder="School"/>
      </div>
      <div class="col-span-full">
        <UiMainTextarea class="h-32" label="School" placeholder="School"/>
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