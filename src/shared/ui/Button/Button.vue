<template>
    <button
        :class="classes"
        :disabled="disabled"
    >
        <div
            v-if="$slots['left-icon']"
            :class="'left-icon'"
        >
            <slot name="left-icon" />
        </div>
        <typography
            size="s"
            bold
        >
            <slot />
        </typography>
        <div
            v-if="$slots['right-icon']"
            :class="'right-icon'"
        >
            <slot name="right-icon" />
        </div>
        <div
            v-if="overview"
            class="overview"
        >
            <div class="overview_inner">
                <Typography
                    class="overview_content"
                    size="xs"
                >
                    {{ overview }}
                </Typography>
            </div>
        </div>
    </button>
</template>

<script setup lang="ts">
import clsx from 'clsx';
import { Typography } from '@/shared/ui';

interface Props {
    color?: 'default' | 'accent';
    disabled?: boolean;
    icon?: boolean;
    size?: 'm' | 's';
    rounded?: boolean;
    overview?: string;
}

const props = defineProps<Props>();

const {
    color = 'default',
    disabled = false,
    size = 's',
    icon = false,
    rounded = false,
    overview = '',
} = props;

const classes = clsx('button', {
    [`size_${size}`]: true,
    [`color_${color}`]: true,
    rounded,
    icon,
});
</script>

<style scoped lang="scss">
@import '../styles/variables';

.button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    border: none;
    cursor: pointer;
    border-radius: $border-radius-m;
    transition: background $transition-s ease;

    &:hover {
        .overview {
            opacity: 1;
        }
    }

    &.size_s {
        min-height: 44px;

        &.rounded {
            border-radius: 22px;
        }
    }

    &.size_m {
        min-height: 54px;

        &.rounded {
            border-radius: 27px;
        }
    }

    &.color_default {
        background: var(--background-secondary);
        color: var(--foreground-default);

        &:hover {
            background: var(--background-secondary-hover);
        }
    }

    &.color_accent {
        background: var(--background-accent);
        color: var(--foreground-on-accent);

        &:hover {
            background: var(--background-accent-hover);
        }
    }
}

.overview {
    position: absolute;
    top: 100%;
    bottom: 0;
    min-width: 110px;
    min-height: 100%;
    cursor: default;
    padding-top: 6px;
    opacity: 0;
    pointer-events: none;
    transition: opacity $transition-m ease;

    &::before {
        content: '';
        position: absolute;
        padding-top: 2px;
        top: 0;
        left: calc(50% - 5px);
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid var(--background-secondary);
    }

    &_inner {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 12px;
        background: var(--background-secondary);
        border-radius: 19px;
    }

    &_content {
        height: 100%;
    }
}

.icon {
    border-radius: 50%;

    &.size_s {
        padding: 0 14px;
    }

    &.size_m {
        padding: 0 19px;
    }
}

.right-icon {
    padding-left: 6px;
}

.left-icon {
    padding-right: 6px;
}
</style>
