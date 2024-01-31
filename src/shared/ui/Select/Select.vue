<template>
    <div
        ref="dropdown"
        class="select"
    >
        <div class="select_container">
            <div
                class="select_inner"
                @click="dropdownVisible = true"
            >
                <div class="select_content">
                    <div class="select_title">
                        <Typography component="span"> {{ props.label }}</Typography>
                    </div>
                    <div class="select_data">
                        <Typography
                            component="span"
                            size="s"
                        >
                            {{ mappedSelectedOption }}
                        </Typography>
                    </div>
                </div>
                <div class="select_icon">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                            fill="#000000"
                        />
                    </svg>
                </div>
            </div>
        </div>
        <div
            v-if="dropdownVisible"
            class="dropdown"
        >
            <div class="dropdown_inner">
                <ul class="dropdown_list">
                    <li
                        v-for="(option, index) in options"
                        :key="index"
                        class="dropdown_item"
                        @click="toggleOptionSelect(option)"
                    >
                        <Typography component="span">
                            {{ option.name }}
                        </Typography>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { Typography } from '@/shared/ui';

export interface SelectOption {
    value: string | number;
    name: string;
}

interface Props {
    label: string;
    options: SelectOption[];
    modelValue: SelectOption | null;
    // variant?: 'default' | 'expanded';
}

const props = withDefaults(defineProps<Props>(), {
    label: '',
    options: (): SelectOption[] => [],
    modelValue: null,
});

const emit = defineEmits<{
    (e: 'update:modelValue', option: SelectOption): void;
}>();

const dropdown = ref<HTMLDivElement | null>(null);

const selectedOption = ref<SelectOption | null>(null);

const dropdownVisible = ref(false);

const mappedSelectedOption = computed(() => {
    return selectedOption.value?.name;
});

const toggleOptionSelect = (option: SelectOption) => {
    selectedOption.value = option;
    dropdownVisible.value = false;
    emit('update:modelValue', option);
};

const closeDropdown = (element: MouseEvent) => {
    if (!dropdown.value || !dropdown.value.contains(element.target as Node)) {
        dropdownVisible.value = false;
    }
};

onMounted(() => {
    window.addEventListener('click', closeDropdown);
});

onBeforeUnmount(() => {
    window.removeEventListener('click', closeDropdown);
});
</script>

<style scoped lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.select {
    position: relative;
    border-radius: $border-radius-m;
    background: var(--background-secondary);

    &_inner {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 54px;
        padding: 0 12px;
    }

    &_container {
    }

    &_content {
    }

    &_title {
    }

    &_data {
    }

    &_icon {
        width: 24px;
        display: flex;
        align-items: center;
        margin-left: 8px;
    }
}

.dropdown {
    position: absolute;
    left: 0;
    top: 100%;
    padding-top: 5px;
    margin-top: 5px;
    width: 600px;
    z-index: 10;
    overflow: hidden;
    background: var(--background-secondary);
    border-radius: $border-radius-m;
    box-shadow: $box-shadow-m;

    &_inner {
        max-height: 350px;
        overflow-y: auto;
    }

    &_list {
        padding: 9px 14px 14px;
        background: var(--background-secondary);
    }

    &_item {
        cursor: pointer;

        &:hover {
            color: var(--foreground-accent);
        }

        &:not(:last-child) {
            margin-bottom: 8px;
        }
    }
}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    background: var(--background-alt);
}

::-webkit-scrollbar-thumb {
    background-color: var(--foreground-default);
    border-radius: 12px;
}
</style>
