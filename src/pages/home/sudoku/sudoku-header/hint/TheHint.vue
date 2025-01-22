<script setup lang="ts">
import IconBulb from '@/shared/icons/IconBulb.vue';
import { useStore } from '@/pages/home/sudoku/store/store.ts';
import { storeToRefs } from 'pinia';

const store = useStore();
const { hints, isPaused } = storeToRefs(store);
</script>

<template>
    <button
        class="flex items-center disabled:cursor-not-allowed"
        :disabled="isPaused || !hints"
        @click="store.showHint()"
    >
        <IconBulb class="size-4" /> Hint ({{ hints }})
    </button>
</template>
