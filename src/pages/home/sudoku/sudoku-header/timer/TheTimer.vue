<script setup lang="ts">
import IconStart from '@/shared/icons/IconStart.vue'
import IconPause from '@/shared/icons/IconPause.vue'

const isRunning = false
const timeSpent = 0
</script>

<template>
  <div class="flex items-center gap-2">
    <span>Time Spent: {{ timeSpent }}</span>
    <button class="flex items-center text-black">
      <IconStart v-if="!isRunning" class="size-5" />
      <IconPause v-else class="size-5" />
    </button>
  </div>
</template>
