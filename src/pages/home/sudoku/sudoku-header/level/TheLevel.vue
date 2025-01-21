<script setup lang="ts">
import BaseSelect from '@/shared/select/BaseSelect.vue'
import { useStore } from '@/pages/home/sudoku/store/store.ts'
import { SudokuLevel } from './level.enum.ts'
import { storeToRefs } from 'pinia'

const store = useStore()
const { sudokuLevel } = storeToRefs(store)

const sudokuLevels: SudokuLevel[] = [
  SudokuLevel.BEGINNER,
  SudokuLevel.INTERMEDIATE,
  SudokuLevel.HARD,
  SudokuLevel.EXPERT,
]

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
