<script lang="ts" setup>
import { ref, watch } from 'vue';
import IconChevron from '@/shared/icons/IconChevron.vue';

type SelectProps = {
    items: string[];
    selectedItem: string;
    disabled?: boolean;
};

const { selectedItem, items, disabled = false } = defineProps<SelectProps>();
const emit = defineEmits(['update:selectedItem']);

const selected = ref<string>(selectedItem);
const open = ref(false);

const toggleDropdown = (): void => {
    if (!disabled) {
        open.value = !open.value;
    }
};

const selectItem = (option: string): void => {
    selected.value = option;
    toggleDropdown();
    emit('update:selectedItem', option);
};

watch(
    () => selectedItem,
    (newValue) => {
        if (newValue !== selected.value) {
            selected.value = newValue;
        }
    },
);
</script>

<template>
    <div class="relative w-full" :tabindex="0" @blur="open = false">
        <div
            :class="[
                'flex items-center text-black bg-gray-200 rounded-md p-2 gap-4',
                { 'cursor-pointer': !disabled, 'cursor-not-allowed opacity-50': disabled },
            ]"
            @click="toggleDropdown"
        >
            <span>{{ selected }} </span>
            <IconChevron class="w-4 h-4" />
        </div>

        <div
            class="absolute left-0 right-0 bg-gray-200 text-black rounded-md shadow-md border border-gray-600 z-10 w-fit mt-1"
            :class="{ hidden: !open }"
        >
            <div
                v-for="(item, i) in items"
                :key="i"
                class="px-4 py-2 cursor-pointer hover:bg-gray-500"
                @click="selectItem(item)"
            >
                {{ item }}
            </div>
        </div>
    </div>
</template>
