<template>
    <div class="details">
        <div class="details_inner">
            <div class="sidebar">
                <div class="sidebar_inner">
                    <div class="sidebar_poster">
                        <img
                            :src="`http://image.tmdb.org/t/p/w600_and_h900_bestv2/${backdrop_path}`"
                            alt="media_poster"
                            class="sidebar_img"
                        />
                    </div>
                </div>
            </div>
            <div class="title">
                <Typography
                    size="xxl"
                    class="title_main"
                    bold
                >
                    {{ media.name }}
                    ({{ new Date(media.release_date).getFullYear() }})
                </Typography>

                <Typography
                    size="m"
                    class="title_sub"
                >
                    {{ media.original_name }}
                </Typography>
            </div>
            <div class="actions">
                <Button rounded>
                    <template v-slot:left-icon>
                        <Icon icon="icon-bookmark-regular" />
                    </template>
                    Отслеживать
                </Button>
                <Button
                    icon
                    :overview="'В избранное'"
                >
                    <Icon icon="icon-heart-regular" />
                </Button>
            </div>
            <div class="about">
                <About :media="props.media" />
            </div>
            <!--            <div class="meta">-->
            <!--                <Meta :media="media" />-->
            <!--            </div>-->
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MediaDetails } from '@/entities/media';
import { Button, Typography, Icon } from '@/shared/ui';
import About from './About.vue';

interface Props {
    media: MediaDetails;
}

const props = defineProps<Props>();

const { backdrop_path } = props.media;
</script>

<style scoped lang="scss">
@import '@/shared/ui/styles/mixins';
@import '@/shared/ui/styles/variables';

.details {
    &_inner {
        display: grid;
        grid-template-areas:
            'sidebar title meta'
            'sidebar actions meta'
            'sidebar about meta'
            'sidebar about meta';

        @media (min-width: $md) {
            grid-template-columns: 280px 4fr 1fr;
        }

        @media (max-width: $md) {
            grid-template-areas:
                'sidebar'
                'title'
                'actions'
                'meta'
                'about';
        }

        @media (min-width: $md) {
            column-gap: 32px;
        }

        @media (max-width: $md) {
            //row-gap: 28px;
        }
    }
}

.actions {
    grid-area: actions;
    display: flex;
    gap: 12px;
    margin-bottom: 28px;

    @media (max-width: $md) {
        justify-content: center;
        margin-bottom: 22px;
    }
}

.about {
    grid-area: about;
}

.sidebar {
    grid-area: sidebar;
    height: 420px;

    @media (max-width: $md) {
        width: 100%;
        margin-bottom: 22px;
    }

    &_inner {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &_poster {
        height: 100%;
        display: flex;
        background: var(--background-secondary);
    }

    &_img {
        object-fit: cover;
    }
}

.title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 28px;

    @media (max-width: $md) {
        align-items: center;
        margin-bottom: 22px;
    }

    &_main {
        margin-bottom: 8px;

        @media (max-width: $md) {
            text-align: center;
        }
    }

    &_sub {
        color: var(--foreground-secondary);
    }
}

.meta {
    grid-area: meta;
}
</style>
