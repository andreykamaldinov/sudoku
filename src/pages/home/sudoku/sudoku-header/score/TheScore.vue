<script setup lang="ts">
import { useStore } from '@/pages/home/sudoku/store/store.ts';
import { storeToRefs } from 'pinia';

const store = useStore();
const { score } = storeToRefs(store);
</script>

<template>
    <div class="flex items-center min-w-20">Score: {{ score }}</div>
</template>
