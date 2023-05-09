<template>
  <div class="w-full bg-gray-100 h-full">
    <div>

      {{formStore}}
    </div>
  </div>

</template>
<script lang="ts" setup>

import {useFormStore} from "~/store";


const formStore = useFormStore();

</script>