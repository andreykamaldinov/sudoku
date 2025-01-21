<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useStore } from '@/pages/home/sudoku/store/store.ts'
import { storeToRefs } from 'pinia'
import TheLevel from '@/pages/home/sudoku/sudoku-header/level/TheLevel.vue'

const TheHint = defineAsyncComponent(
  () => import('@/pages/home/sudoku/sudoku-header/hint/TheHint.vue'),
)
const TheScore = defineAsyncComponent(
  () => import('@/pages/home/sudoku/sudoku-header/score/TheScore.vue'),
)
const TheTimer = defineAsyncComponent(
  () => import('@/pages/home/sudoku/sudoku-header/timer/TheTimer.vue'),
)

const store = useStore()
const { isStarted, isFinished } = storeToRefs(store)

const startGame = (): void => {
  if (isStarted.value) {
    store.resetGame()
  } else {
    store.startGame()
  }
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-5 py-4 px-2 border-y-gray-400 border-y w-full">
    <TheLevel />
    <template v-if="isStarted">
      <TheScore />
      <TheTimer />
      <TheHint />
    </template>

    <button
      v-if="isFinished"
      class="flex items-center bg-black text-white p-2 rounded ml-auto"
      @click="startGame"
    >
      Start new game
    </button>

    <button
      v-else
      class="flex items-center bg-black text-white p-2 rounded ml-auto"
      @click="startGame"
    >
      {{ isStarted ? 'Reset game' : 'Start game' }}
    </button>
  </div>
</template>
