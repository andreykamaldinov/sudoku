<script setup lang="ts">
import IconCup from '@/shared/icons/IconCup.vue';
import { useStore } from '@/pages/home/sudoku/store/store.ts';
import { storeToRefs } from 'pinia';

const store = useStore();
const { leaderBoards } = storeToRefs(store);
const isEmpty = Object.keys(leaderBoards.value).length;
</script>

<template>
    <div v-if="isEmpty" class="flex flex-col gap-2">
        <div class="flex items-center px-4 py-1 rounded bg-black w-fit gap-2 text-yellow-300">
            <IconCup class="size-4 color-red-100" /> <span class="text-white"> LeadersBoard: </span>
        </div>
        <ul class="gap-2 text-black">
            <li v-for="(scores, level) in leaderBoards" :key="level">
                {{ level }}
                <ol class="ps-5 mt-2 gap-1 list-decimal list-inside">
                    <li v-for="(score, index) in scores" :key="index">{{ score }}</li>
                </ol>
            </li>
        </ul>
    </div>
</template>
