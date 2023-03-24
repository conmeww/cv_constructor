<template>
  <label  class="block text-sm font-medium text-gray-500 transition-all
     duration-75 ease-in-out group-focus-within:text-blue-400 capitalize pb-2" for="4">polkjhfg</label>
  <VueDatePicker v-model="month" month-picker calendar-class-name="dp-custom-menu" locale="ru" />


</template>

<script setup>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref();

const month = ref({
  month: new Date().getMonth(),
  year: new Date().getFullYear()
});
</script>
<style>
.dp-custom-menu {
  box-shadow: 0 0 6px #1976d2;
  background: rebeccapurple;
}
.dp__theme_light {
  --dp-background-color:#f9fafb;
  --dp-text-color: #212121;

  --dp-primary-color:#00000;

  --dp-border-color:transparent;

  --dp-border-color-hover: transparent;

}
.dp__input {
  border-bottom: 2px solid transparent;
border-radius: 0;
}
.dp__input_focus {
  background-color: #FFFFFF !important;
  border-bottom: 2px solid var(--color-main) !important;
}
.dp__overlay_cell_active {
  background: var(--color-main);
}
</style>
