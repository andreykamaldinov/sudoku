<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

import LeadersBoard from '@/pages/home/sudoku/leaders-board/LeadersBoard.vue';
import SudokuHeader from '@/pages/home/sudoku/sudoku-header/SudokuHeader.vue';

const UndoRedo = defineAsyncComponent(() => import('@/pages/home/sudoku/undo-redo/UndoRedo.vue'));

const AvailableDigits = defineAsyncComponent(() => import('@/pages/home/sudoku/available-digits/AvailableDigits.vue'));
const SudokuBlock = defineAsyncComponent(() => import('@/pages/home/sudoku/sudoku-block/SudokuBlock.vue'));
</script>

<template>
    <div class="flex justify-center w-full">
        <div class="flex flex-col justify-center items-center gap-5 px-5">
            <SudokuHeader />
            <div class="flex gap-10 w-full mob:flex-col">
                <div class="flex flex-col gap-5">
                    <UndoRedo />
                    <SudokuBlock />
                    <AvailableDigits />
                </div>
                <LeadersBoard />
            </div>
        </div>
    </div>
</template>
