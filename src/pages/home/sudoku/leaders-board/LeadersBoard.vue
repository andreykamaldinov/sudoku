<script setup lang="ts">
import IconCup from '@/shared/icons/IconCup.vue'
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center px-4 py-1 rounded bg-black w-fit gap-2 text-yellow-300">
      <IconCup class="size-4 color-red-100" /> <span class="text-white"> LeadersBoard: </span>
    </div>
    <ul class="gap-2 text-black">
      <li>
        Easy
        <ol class="ps-5 mt-2 gap-1 list-decimal list-inside">
          <li>200</li>
        </ol>
      </li>
    </ul>
  </div>
</template>
