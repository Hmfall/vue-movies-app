<template>
    <div :class="`icon size_${size}`">
        <div :class="icon"></div>
    </div>
</template>

<script setup lang="ts">
export type IconType =
    | 'icon-heart-regular'
    | 'icon-heart-solid'
    | 'icon-bookmark-regular'
    | 'icon-bookmark-solid'
    | 'icon-chevron-right';

interface Props {
    icon: IconType;
    size?: 's' | 'm' | 'l';
}

const props = defineProps<Props>();

const { size = 'm' } = props;
</script>

<style scoped lang="scss">
.icon {
    min-width: 16px;
    min-height: 16px;
    color: var(--foreground-default);
}

.size_s {
    font-size: 14px;
}

.size_m {
    font-size: 16px;
}

.size_l {
    font-size: 20px;
}
</style>
