<template>

  <div class=" w-full rounded inline-block  relative" tabindex="0">
    <label :label="label" class="
    block text-base font-medium text-gray-500
    transition-all duration-75 ease-in-out group-focus-within:text-blue-custom capitalize pb-1
    ">{{ label }}</label>
    <VueDatePicker auto-apply v-model="modelValue" calendar-class-name="dp-custom-menu" locale="ru" month-picker
                   @update:model-value="$emit('update:modelValue',modelValue)"  show-now-button now-button-label="Current"
                   class=" w-full  rounded h-10 bg-gray-custom appearance-none   focus:outline-none "
    />

  </div>
</template>
<script lang="ts" setup>
import {defineEmits, ref} from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

withDefaults(defineProps<{
  label?: string
  placeholder?: string,
  showTooltip: Boolean,
  present:Boolean
}>(), {
  // defaults
})

let modelValue = ref({
  month: new Date().getMonth(),
  year: new Date().getFullYear()
});
defineEmits(["update:modelValue"]);
</script>

<style>
.dp__arrow_top, .dp__action_row {
  display: none !important;
}

.dp__menu.dp__menu_index.dp__theme_light {
  /*height: 250px !important;*/
  border-radius: 12px;
  overflow: hidden;
}

.dp__overlay_cell_pad {
  font-size: 14px;
  padding: 5px 0px;
  border-radius: 20px;
  text-transform: uppercase;
}

.dp__month_picker_header {
  width: 80%;
  margin: 0 auto;
}

.dp__overlay_col {
  padding: 3px;
}

.dp__overlay_container.dp__container_flex, .dp__month_year_row {
  height: auto !important;
}

.dp__calendar div {
  height: 200px !important;
}

.dp-custom-menu {
  box-shadow: 0 0 6px #1976d2;
  background: rebeccapurple;
}

.dp__theme_light {
  --dp-background-color: #f9fafb;
  --dp-text-color: #212121;
  --dp-primary-color: #00000;
  --dp-border-color: transparent;
  --dp-border-color-hover: transparent;

}


.dp__input_focus, .dp__input {
  background-color: #eff2f9 !important;
  border: none;
  height:40px !important;
}

.dp__input_wrap {
  height: 100% !important;
}

.dp__overlay_cell_active {
  background: var(--color-main);
}
</style>
