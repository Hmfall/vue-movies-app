<template>
    <div class="input">
        <div class="input_inner">
            <div class="input_icon">
                <slot name="icon"></slot>
            </div>
            <input
                class="input_field"
                :placeholder="placeholder"
                :disabled="disabled"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    disabled?: boolean;
    placeholder?: string;
}

interface Emits {
    (e: 'update:visible', visible: boolean): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const { disabled = false, placeholder = '' } = props;
</script>

<style scoped lang="scss">
@import '../styles/variables';

.input {
    width: 100%;

    &_inner {
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        background: var(--background-secondary);
        border-radius: $border-radius-m;
        overflow: hidden;
    }

    &_icon {
        position: relative;
        background: none;
    }

    &_field {
        width: 100%;
        padding-left: 10px;
        background: none;
        color: var(--background-secondary);
    }
}
</style>
