<script setup lang="ts">
import TheHint from '@/pages/home/sudoku/sudoku-header/hint/TheHint.vue'
import TheLevel from '@/pages/home/sudoku/sudoku-header/level/TheLevel.vue'
import TheScore from '@/pages/home/sudoku/sudoku-header/score/TheScore.vue'
import TheTimer from '@/pages/home/sudoku/sudoku-header/timer/TheTimer.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-5 py-4 px-2 border-y-gray-400 border-y w-full">
    <TheLevel />
    <TheScore />
    <TheTimer />
    <TheHint />
  </div>
</template>
