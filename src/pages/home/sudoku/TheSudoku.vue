<script setup lang="ts">
import LeadersBoard from '@/pages/home/sudoku/leaders-board/LeadersBoard.vue'
import SudokuHeader from '@/pages/home/sudoku/sudoku-header/SudokuHeader.vue'
import AvailableDigits from '@/pages/home/sudoku/available-digits/AvailableDigits.vue'
import HintMessage from '@/pages/home/sudoku/sudoku-header/hint/hint-message/hint-message.vue'
import SudokuBlock from '@/pages/home/sudoku/sudoku-block/SudokuBlock.vue'
</script>

<template>
  <div class="flex justify-center w-full">
    <div class="flex flex-col justify-center items-center gap-5 px-5">
      <SudokuHeader />
      <HintMessage />
      <div class="flex gap-10 w-full mob:flex-col">
        <div class="flex flex-col gap-5">
          <SudokuBlock />
          <AvailableDigits />
        </div>
        <LeadersBoard />
      </div>
    </div>
  </div>
</template>
