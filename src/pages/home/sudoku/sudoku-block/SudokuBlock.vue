<script setup lang="ts">
const blocks = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => null))
</script>

<template>
  <div class="w-fit mob:w-full grid grid-cols-3 border border-black">
    <div
      v-for="(block, blockIndex) in blocks"
      :key="blockIndex"
      class="size-36 mob:w-full grid grid-cols-3 border border-gray-500"
    >
      <input
        v-for="(cellValue, cellIndex) in block"
        :key="cellIndex"
        class="sudoku-cell text-center text-lg font-bold border border-gray-300 outline-none"
        type="number"
        min="1"
        max="9"
        :value="cellValue"
      />
    </div>
  </div>
</template>
