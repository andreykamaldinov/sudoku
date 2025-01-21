<script setup lang="ts">
import { useSudokuStore } from '@/pages/home/sudoku/store/sudoku.store.ts'
import { storeToRefs } from 'pinia'

const store = useSudokuStore()
const { score } = storeToRefs(store)
</script>

<template>
  <div>Score: {{ score }}</div>
</template>
