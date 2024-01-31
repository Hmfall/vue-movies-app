<template>
    <div class="meta_inner">
        <div class="rating">
            <div class="rating_title">
                <Typography size="l"> Рейтинг TMDB</Typography>
            </div>
            <div class="rating_data">
                <Typography size="xl">
                    {{ props.media.vote_average.toFixed(1) }}
                </Typography>
            </div>
            <div class="rating_count">
                <Typography size="m">
                    {{ props.media.vote_count }}
                    {{ plural(media.vote_count, 'оценка', 'оценки', 'оценок') }}
                </Typography>
            </div>
            <div class="rating_action">
                <Button
                    rounded
                    class="rating_action-btn"
                >
                    Оценить
                    {{
                        media.media_type === MediaTypeEnum.movie ? 'фильм' : 'сериал'
                    }}
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import plural from 'plural-ru';
import type { MediaDetails } from '@/entities/media';
import { MediaTypeEnum } from '@/shared/api/types';
import { Button, Typography } from '@/shared/ui';

interface Props {
    media: MediaDetails;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.meta {
    &_inner {
        display: flex;
        justify-content: end;
    }
}

.rating {
    width: 100%;

    &_title {
        margin-bottom: 12px;
    }

    &_data {
        margin-bottom: 4px;
    }

    &_count {
        margin-bottom: 14px;
    }

    &_action {
        width: 100%;

        &-btn {
            width: 100%;
        }
    }
}
</style>
