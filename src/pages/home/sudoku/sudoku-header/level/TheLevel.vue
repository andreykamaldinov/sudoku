<script setup lang="ts">
import BaseSelect from '@/shared/select/BaseSelect.vue';
import { useStore } from '@/pages/home/sudoku/store/store.ts';
import { SudokuLevel } from './level.enum.ts';
import { storeToRefs } from 'pinia';

const store = useStore();
const { sudokuLevel, isStarted } = storeToRefs(store);

const sudokuLevels: SudokuLevel[] = [
    SudokuLevel.BEGINNER,
    SudokuLevel.INTERMEDIATE,
    SudokuLevel.HARD,
    SudokuLevel.EXPERT,
];
</script>

<template>
    <div class="flex gap-1 items-center">
        Level:
        <BaseSelect
            :disabled="isStarted"
            :selected-item="sudokuLevel"
            :items="sudokuLevels"
            @update:selected-item="(level: SudokuLevel) => store.changeSudokuLevel(level)"
        />
    </div>
</template>
