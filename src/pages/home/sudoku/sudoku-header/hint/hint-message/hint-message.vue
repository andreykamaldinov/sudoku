<script setup lang="ts">
import { watch } from 'vue'
import { useSudokuStore } from '@/pages/home/sudoku/store/sudoku.store.ts'
import { storeToRefs } from 'pinia'

const store = useSudokuStore()
const { hintCell, isHintVisible } = storeToRefs(store)

watch(
  () => hintCell.value?.guess,
  (newGuess) => {
    if (hintCell.value && newGuess === hintCell.value.value) {
      store.hideHint()
    }
  },
)
</script>

<template>
  <div
    v-if="isHintVisible && hintCell"
    class="p-4 bg-yellow-100 border border-yellow-500 rounded w-full"
  >
    <p>
      Hint: Row <strong>{{ hintCell?.row + 1 }}</strong
      >, Column <strong>{{ hintCell?.col + 1 }}</strong
      >, Correct value: <strong>{{ hintCell?.value }}</strong
      >.
    </p>
  </div>
</template>
