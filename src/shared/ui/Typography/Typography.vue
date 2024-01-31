<template>
    <component
        :is="component"
        :class="classes"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import clsx from 'clsx';

interface Props {
    component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    underline?: boolean;
    bold?: boolean;
    noWrap?: boolean;
}

const props = defineProps<Props>();

const { component = 'p', size = 'm', underline = false, bold = false } = props;

const classes = clsx('typography', {
    [`size_${size}`]: true,
    underline,
    bold,
});
</script>

<style scoped lang="scss">
@import '@/shared/ui/styles/variables';

.typography {
    font-style: normal;
    color: inherit;
}

.underline {
    text-decoration: underline;
}

.size_xs {
    font-size: 12px;

    &.bold {
        font-weight: 500;
    }
}

.size_s {
    font-size: 14px;
    line-height: 150%;

    &.bold {
        font-weight: 500;
    }
}

.size_m {
    font-size: 16px;
    line-height: 150%;

    &.bold {
        font-weight: 500;
    }
}

.size_l {
    font-size: 22px;

    &.bold {
        font-weight: 600;
    }
}

.size_xl {
    font-size: 28px;

    &.bold {
        font-weight: 600;
    }
}

.size_xxl {
    font-size: 32px;

    &.bold {
        font-weight: 700;
    }
}

@media (max-width: $sm) {
    .size_xxl {
        font-size: 30px;
    }

    .size_xl {
        font-size: 26px;
    }
}
</style>
