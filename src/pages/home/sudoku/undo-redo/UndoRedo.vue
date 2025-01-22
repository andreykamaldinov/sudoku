<script setup lang="ts">
import { useStore } from '@/pages/home/sudoku/store/store.ts';
import { storeToRefs } from 'pinia';

const store = useStore();
const { canRedo, canUndo, isPaused, isStarted } = storeToRefs(store);
const btnClassnames = 'px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed';
</script>

<template>
    <div v-if="isStarted" class="flex gap-2 justify-center">
        <button :disabled="!canUndo || isPaused" :class="btnClassnames" @click="store.undo">Undo</button>
        <button :disabled="!canRedo || isPaused" :class="btnClassnames" @click="store.redo">Redo</button>
    </div>
</template>

<style scoped></style>
