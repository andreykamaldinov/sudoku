<script setup lang="ts">
import BaseSelect from '@/shared/select/BaseSelect.vue'
import { SudokuLevel } from '@/pages/home/sudoku/sudoku-header/level/level.enum.ts'

const defaultItem = SudokuLevel.BEGINNER
const sudokuLevels = [
  SudokuLevel.BEGINNER,
  SudokuLevel.INTERMEDIATE,
  SudokuLevel.HARD,
  SudokuLevel.EXPERT,
]
</script>

<template>
  <div class="flex gap-1 items-center">
    Level:
    <BaseSelect :selected-item="defaultItem" :items="sudokuLevels" />
  </div>
</template>
