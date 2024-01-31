<template>
    <div class="about_inner">
        <div class="about_meta">
            <div class="about_title">
                <Typography
                    size="l"
                    bold
                >
                    {{
                        media.media_type === MediaTypeEnum.movie
                            ? 'О фильме'
                            : 'О сериале'
                    }}
                </Typography>
            </div>
            <ul class="about_list">
                <li class="about_item">
                    <Typography
                        v-if="media?.release_date"
                        class="about_item-meta"
                        size="s"
                    >
                        Год производства
                    </Typography>
                    <Typography
                        class="about_item-data"
                        size="s"
                        >{{ media.release_date }}
                    </Typography>
                </li>
                <li
                    v-if="media?.tagline"
                    class="about_item"
                >
                    <Typography
                        class="about_item-meta"
                        size="s"
                    >
                        Слоган
                    </Typography>
                    <Typography
                        class="about_item-data"
                        size="s"
                    >
                        {{ media.tagline }}
                    </Typography>
                </li>
                <li
                    v-if="media?.genres"
                    class="about_item"
                >
                    <Typography
                        class="about_item-meta"
                        size="s"
                    >
                        Жанры
                    </Typography>
                    <div class="about_item-data">
                        <Typography
                            class="about_item-data"
                            size="s"
                        >
                            {{ media.genres.map((genre) => genre.name).join(', ') }}
                        </Typography>
                    </div>
                </li>
                <li
                    v-if="media?.original_language"
                    class="about_item"
                >
                    <Typography
                        class="about_item-meta"
                        size="s"
                    >
                        Язык оригинала
                    </Typography>
                    <Typography
                        class="about_item-data"
                        size="s"
                    >
                        {{ toUpperCase(media.original_language) }}
                    </Typography>
                </li>
                <li
                    v-if="media?.original_name"
                    class="about_item"
                >
                    <Typography
                        class="about_item-meta"
                        size="s"
                    >
                        Оригинальное название
                    </Typography>
                    <Typography
                        class="about_item-data"
                        size="s"
                    >
                        {{ media.original_name }}
                    </Typography>
                </li>

                <li
                    v-if="media?.budget"
                    class="about_item"
                >
                    <Typography
                        class="about_item-meta"
                        size="s"
                    >
                        Бюджет
                    </Typography>
                    <Typography
                        class="about_item-data"
                        size="s"
                    >
                        {{ usdCurrency(media.budget) }}
                    </Typography>
                </li>
                <li
                    v-if="media?.revenue"
                    class="about_item"
                >
                    <Typography
                        class="about_item-meta"
                        size="s"
                    >
                        Сборы в прокате
                    </Typography>
                    <Typography
                        class="about_item-data"
                        size="s"
                    >
                        {{ usdCurrency(media.revenue) }}
                    </Typography>
                </li>
                <li
                    v-if="
                        (media?.runtime as number[]).length &&
                        media.media_type === MediaTypeEnum.tv
                    "
                    class="about_item"
                >
                    <Typography
                        class="about_item-meta"
                        size="s"
                    >
                        Длительность эпизода
                    </Typography>
                    <Typography
                        class="about_item-data"
                        size="s"
                    >
                        {{ (media.runtime as number[])[0] }} мин.
                    </Typography>
                </li>
                <li
                    v-if="media.runtime && media.media_type === MediaTypeEnum.movie"
                    class="about_item"
                >
                    <Typography
                        class="about_item-meta"
                        size="s"
                    >
                        Длительность
                    </Typography>
                    <Typography
                        class="about_item-data"
                        size="s"
                    >
                        {{ media.runtime }} мин.
                    </Typography>
                </li>
            </ul>
        </div>
        <div
            v-if="media.overview"
            class="about_overview"
        >
            <div class="about_title">
                <Typography
                    size="l"
                    bold
                >
                    Обзор
                </Typography>
            </div>
            <div class="about_text">
                <Typography size="m">
                    {{ media.overview }}
                </Typography>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { toUpperCase } from 'uri-js/dist/esnext/util';
import { MediaDetails } from '@/entities/media';
import { MediaTypeEnum } from '@/shared/api/types';
import { Typography } from '@/shared/ui';

interface Props {
    media: MediaDetails;
}

const props = defineProps<Props>();

const { media } = props;

const usdCurrency = (number: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(number);
};
</script>

<style scoped lang="scss">
@import '@/shared/ui/styles/mixins';
@import '@/shared/ui/styles/variables';

.about {
    &_inner {
        display: flex;
        flex-direction: column;
        row-gap: 28px;

        @media (max-width: $md) {
            align-items: center;
            row-gap: 24px;
        }
    }

    &_meta {
        width: 100%;
    }

    &_title {
        margin-bottom: 14px;
    }

    &_list {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    &_item {
        display: flex;
        width: 100%;
        padding: 4px 0;

        @media (min-width: $md) {
            padding: 6px 0;
        }

        @media (min-width: $lg) {
            padding: 8px 0;
        }

        &-meta {
            color: var(--foreground-secondary);
            flex-grow: 0;
            flex-shrink: 0;

            @include adaptive('flex-basis', 240, 224, $_md, $_lg);
        }

        &-data {
            display: flex;
            width: 100%;

            @media (max-width: $md) {
                justify-content: end;
                text-align: right;
            }
        }
    }

    &_overview {
    }
}
</style>
