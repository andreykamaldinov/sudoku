<script setup lang="ts">
import BaseSelect from '@/shared/select/BaseSelect.vue'
import { useSudokuStore } from '@/pages/home/sudoku/store/sudoku.store.ts'
import { sudokuLevels } from '@/pages/home/sudoku/utils/sudoku.consts.ts'
import type { SudokuLevel } from './level.enum.ts'
import { storeToRefs } from 'pinia'

const store = useSudokuStore()
const { sudokuLevel } = storeToRefs(store)

const handleLevelChange = (level: SudokuLevel): void => {
  store.changeSudokuLevel(level)
}
</script>

<template>
  <div class="flex gap-1 items-center">
    Level:
    <BaseSelect
      :selected-item="sudokuLevel"
      :items="sudokuLevels"
      @update:selected-item="handleLevelChange"
    />
  </div>
</template>
