<script setup lang="ts">
import { isCellRight, makeGuess } from '@/pages/home/sudoku/sudoku-cell/sudoku-cell.ts';
import { useStore } from '@/pages/home/sudoku/store/store.ts';
import { storeToRefs } from 'pinia';
import type { CellType } from '@/pages/home/sudoku/sudoku-cell/sudoku-cell.types.ts';

const store = useStore();
const { sudokuBlock, isStarted, isCompleted, isPaused } = storeToRefs(store);

const onInput = (cell: CellType, cellIndex: number, rowIndex: number, event: Event): void => {
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
    store.recordMove(cell, value, rowIndex, cellIndex);
    updateScore(cell);
    makeGuess(cell, value);
    if (!cell.isError) {
        store.removeMoveFromHistory(rowIndex, cellIndex);
    }
    if (isCompleted.value) {
        store.finishGame();
    }
};

const updateScore = (cell: CellType): void => {
    if (cell.guess) {
        return;
    }
    if (cell.guess === cell.value) {
        store.scoreSuccess();
    } else {
        store.scorePenalty();
    }
};

const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }
};
</script>

<template>
    <div v-if="isStarted" class="flex flex-col border-2 border-black h-[440px] w-[440px] mob:w-full">
        <div v-for="(row, rowIndex) in sudokuBlock" :key="rowIndex" class="flex w-full h-full sudoku-row">
            <input
                v-for="(cell, cellIndex) in row"
                :key="cellIndex"
                type="number"
                :disabled="cell.isVisible || isCellRight(cell) || isPaused || cell.isHint"
                :value="(cell.isVisible && cell.value) || (!cell.isVisible && cell.guess)"
                :class="[
                    'sudoku-cell text-center text-lg font-bold border border-gray-300 outline-none disabled:cursor-not-allowed w-full h-full',
                    cell.isVisible ? 'bg-gray-200' : '',
                    cell.isError ? 'bg-red-200' : '',
                    cell.isHint ? 'bg-blue-400' : '',
                    isCellRight(cell) ? 'bg-green-400' : '',
                ]"
                @input="onInput(cell, cellIndex, rowIndex, $event)"
                @keydown="onKeyDown"
            />
        </div>
    </div>
</template>

<style scoped>
.sudoku-row:nth-child(3n):not(:last-child) {
    border-bottom: 2px solid black;
}

.sudoku-cell:nth-child(3n):not(:last-child) {
    border-right: 2px solid black;
}
</style>
