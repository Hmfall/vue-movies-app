<template>
    <teleport to="body">
        <div
            v-if="props.visible"
            class="popup"
            @click="handleVisible"
        >
            <div class="popup_inner">
                <div
                    class="popup_content"
                    @click.stop
                >
                    <div
                        class="popup_visible"
                        @click="handleVisible"
                    >
                        <typography> x </typography>
                    </div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { Typography } from '@/shared/ui';

interface Props {
    visible?: boolean;
}

interface Emits {
    (e: 'update:visible', visible: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
    visible: false,
});

const emits = defineEmits<Emits>();

const handleVisible = () => {
    emits('update:visible', false);
};

watch(
    () => props.visible,
    () => {
        if (props.visible) document.body.classList.add('lock');
        else document.body.classList.remove('lock');
    },
);
</script>

<style scoped lang="scss">
@import '../styles/variables';

.popup {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgb(0 0 0 / 80%);
    backdrop-filter: blur(4px);
    overflow: hidden auto;

    &_inner {
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 10px;
    }

    &_content {
        position: relative;
        padding: 32px;
        background: var(--background-default);
        border-radius: $border-radius-m;
    }

    &_visible {
        position: absolute;
        top: 10px;
        right: 10px;
    }
}
</style>
