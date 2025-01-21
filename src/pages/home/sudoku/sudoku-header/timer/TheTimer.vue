<script setup lang="ts">
import IconStart from '@/shared/icons/IconStart.vue'
import IconPause from '@/shared/icons/IconPause.vue'
import { useStore } from '@/pages/home/sudoku/store/store.ts'
import { onMounted, onUnmounted, watch } from 'vue'
import { storeToRefs } from 'pinia'

const store = useStore()
const { timeSpent, isPaused, isStarted, isFinished } = storeToRefs(store)

let interval: ReturnType<typeof setInterval>

const startTimer = (): void => {
  interval = setInterval(() => {
    store.timeSpent += 1
  }, 1000)
}

const stopTimer = (): void => {
  clearInterval(interval)
}

const handlePauseChange = (): void => {
  store.setPause()
  if (isPaused.value) {
    stopTimer()
  } else {
    startTimer()
  }
}

watch(isFinished, (newValue) => {
  if (newValue) {
    stopTimer()
  }
})

onMounted(() => {
  if (isStarted.value) {
    startTimer()
  }
})

onUnmounted(() => {
  stopTimer()
})
</script>

<template>
  <div class="flex items-center gap-2">
    <span>Time Spent: {{ timeSpent }}</span>
    <button v-if="!isFinished" class="flex items-center text-black ml-2">
      <IconStart v-if="isPaused" class="size-5" @click="handlePauseChange" />
      <IconPause v-else class="size-5" @click="handlePauseChange" />
    </button>
  </div>
</template>
