<script setup lang="ts">
import IconBulb from '@/shared/icons/IconBulb.vue'
import { useSudokuStore } from '@/pages/home/sudoku/store/sudoku.store.ts'
import { ref } from 'vue'
import { SudokuScore } from '@/pages/home/sudoku/sudoku-header/score/score.enum.ts'
import { storeToRefs } from 'pinia'

const store = useSudokuStore()
const { hints } = storeToRefs(store)

const minusHintScore = ref(SudokuScore.HINT_PENALTY)

const showHint = (): void => {
  store.useHint(minusHintScore.value++)
}
</script>

<template>
  <button class="flex items-center" @click="showHint">
    <IconBulb class="size-4" /> Hint ({{ hints }})
  </button>
</template>
