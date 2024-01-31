<template>
    <div :class="classes"></div>
</template>

<script setup lang="ts">
import clsx from 'clsx';

interface Props {
    size?: 's' | 'm' | 'l';
    absolute?: boolean;
}

const props = defineProps<Props>();

const { size = 'm', absolute = false } = props;

const classes = clsx('loader', {
    [`size_${size}`]: true,
    absolute,
});
</script>

<style scoped lang="scss">
.loader {
    padding: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--foreground-default);

    --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;

    mask: var(--_m);
    mask: var(--_m);
    mask-composite: source-out;
    mask-composite: subtract;
    animation: l3 1s infinite linear;

    &.size_s {
        width: 22px;
        height: 22px;
    }

    &.size_m {
        width: 44px;
        height: 44px;
    }

    &.size_l {
        width: 50px;
        height: 50px;
    }
}

.absolute {
    position: absolute;
    top: 50%;
    left: 50%;
}

@keyframes l3 {
    to {
        transform: rotate(1turn);
    }
}
</style>
