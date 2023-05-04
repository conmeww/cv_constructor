<template>
  <span class="drag-handle cursor-grab handle flex">
    <EllipsisVerticalIcon aria-hidden="true" class=" h-7 w-7 fill-gray-500"/>
     <EllipsisVerticalIcon aria-hidden="true" class="absolute -left-2 h-7 w-7 fill-gray-500"/>
  </span>
</template>
<script lang="ts" setup>
import {EllipsisVerticalIcon} from '@heroicons/vue/20/solid'
</script>