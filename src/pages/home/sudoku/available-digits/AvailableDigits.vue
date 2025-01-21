<script setup lang="ts">
import { useStore } from '@/pages/home/sudoku/store/store.ts'
import { storeToRefs } from 'pinia'

const store = useStore()
const { availableDigits, isStarted, isDigitDisabled } = storeToRefs(store)
</script>

<template>
  <div v-if="isStarted" class="flex flex-col justify-center gap-2">
    <span class="text-lg text-black font-medium">Available Digits:</span>
    <div class="flex flex-wrap gap-2.5">
      <span
        v-for="digitObj in availableDigits"
        :key="digitObj.digit"
        :class="[
          'flex justify-center py-2 px-3.5 items-center border border-solid font-bold border-black text-dark',
          { 'bg-gray-100 text-gray-600': isDigitDisabled(digitObj.digit) },
        ]"
      >
        {{ digitObj.digit }}
      </span>
    </div>
  </div>
</template>
