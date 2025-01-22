<script setup lang="ts">
import IconStart from '@/shared/icons/IconStart.vue';
import IconPause from '@/shared/icons/IconPause.vue';
import { useStore } from '@/pages/home/sudoku/store/store.ts';
import { computed, onMounted, onUnmounted, watch } from 'vue';
import { storeToRefs } from 'pinia';

const store = useStore();
const { isPaused, isStarted, isFinished } = storeToRefs(store);

let interval: ReturnType<typeof setInterval>;

const startTimer = (): void => {
    interval = setInterval(() => {
        store.timeSpent += 1;
    }, 1000);
};

const stopTimer = (): void => {
    clearInterval(interval);
};

const handlePauseChange = (): void => {
    store.setPause();
    if (isPaused.value) {
        stopTimer();
    } else {
        startTimer();
    }
};

watch(isFinished, (newValue) => {
    if (newValue) {
        stopTimer();
    }
});

onMounted(() => {
    if (isStarted.value) {
        startTimer();
    }
});

onUnmounted(() => {
    stopTimer();
});

const formattedTime = computed((): string => {
    const minutes = Math.floor(store.timeSpent / 60)
        .toString()
        .padStart(2, '0');
    const seconds = (store.timeSpent % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
});
</script>

<template>
    <div class="flex items-center gap-2">
        <span class="min-w-36">Time Spent: {{ formattedTime }}</span>
        <button v-if="!isFinished" class="flex items-center text-black ml-auto">
            <IconStart v-if="isPaused" class="size-5" @click="handlePauseChange" />
            <IconPause v-else class="size-5" @click="handlePauseChange" />
        </button>
    </div>
</template>
