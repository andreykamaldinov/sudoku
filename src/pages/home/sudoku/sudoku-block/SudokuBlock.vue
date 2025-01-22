<script setup lang="ts">
import { isCellRight, makeGuess } from '@/pages/home/sudoku/sudoku-cell/sudoku-cell.ts';
import { useStore } from '@/pages/home/sudoku/store/store.ts';
import { storeToRefs } from 'pinia';
import type { CellType } from '@/pages/home/sudoku/sudoku-cell/sudoku-cell.types.ts';

const store = useStore();
const { sudokuBlock, isStarted, isCompleted, isPaused } = storeToRefs(store);

const onInput = (cell: CellType, event: Event): void => {
    const input = event.target as HTMLInputElement;
    let filteredValue = input.value.replace(/[^1-9]/g, '');

    if (filteredValue.length > 1) {
        filteredValue = filteredValue.slice(0, 1);
        input.value = filteredValue;
    }

    const value = parseFloat(filteredValue);

    if (cell.guess === value) {
        return;
    }
    if (Number.isNaN(value)) {
        input.value = '';
        return;
    }

    makeGuess(cell, value);
    if (cell.value !== value) {
        store.scorePenalty();
    } else {
        store.scoreSuccess();
        if (isCompleted.value) {
            store.finishGame();
        }
    }
};
</script>

<template>
    <div v-if="isStarted" class="flex flex-col border-2 border-black h-[440px] max-w-[440px]">
        <div v-for="(row, rowIndex) in sudokuBlock" :key="rowIndex" class="flex w-full h-full">
            <input
                v-for="(cell, cellIndex) in row"
                :key="cellIndex"
                type="number"
                :disabled="cell.isVisible || isCellRight(cell) || isPaused"
                :value="(cell.isVisible && cell.value) || (!cell.isVisible && cell.guess)"
                :class="[
                    'text-center text-lg font-bold border border-gray-300 outline-none disabled:cursor-not-allowed w-full h-full',
                    cell.isVisible ? 'bg-gray-200' : '',
                    cell.isError ? 'bg-red-200' : '',
                    isCellRight(cell) ? 'bg-green-400' : '',
                ]"
                @input="onInput(cell, $event)"
            />
        </div>
    </div>
</template>
