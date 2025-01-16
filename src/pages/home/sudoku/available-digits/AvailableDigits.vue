<script setup lang="ts">
const availableDigits = Array.from({ length: 10 }, (_, i) => ({
  digit: i,
  disabled: false,
}))
</script>

<template>
  <div class="flex flex-col justify-center gap-2">
    <span>Available Digits:</span>
    <div class="flex flex-wrap gap-2.5">
      <button
        v-for="digitObj in availableDigits"
        :key="digitObj.digit"
        class="flex justify-center py-2 px-3 items-center border border-solid font-bold border-black text-dark cursor-pointer hover:dark:bg-gray-100 disabled:bg-gray-100 disabled:text-gray-600 disabled:cursor-not-allowed"
        :disabled="digitObj.disabled"
      >
        {{ digitObj.digit }}
      </button>
    </div>
  </div>
</template>
