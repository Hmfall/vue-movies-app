<template>
    <a
        class="media-preview"
        @click="redirect"
    >
        <div class="media-preview_inner">
            <div class="media-preview_poster">
                <img
                    :src="
                        'http://image.tmdb.org/t/p/w710_and_h400_multi_faces' +
                        props.media.poster_path
                    "
                    alt="Media Poster"
                    loading="lazy"
                />
                <div class="swiper-lazy-preloader"></div>
            </div>
            <div class="media-preview_meta">
                <div class="media-preview_title">
                    <Typography
                        size="m"
                        component="span"
                    >
                        {{
                            media && 'title' in media
                                ? (media as Movie).title
                                : (media as Tv).name
                        }}
                    </Typography>
                </div>
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { MediaType, Movie, Tv } from '@/shared/api/types';
import { APP_PATHS } from '@/shared/lib';
import { Typography } from '@/shared/ui';

const router = useRouter();

interface Props {
    media: Movie | Tv;
    mediaType: MediaType;
}

const props = defineProps<Props>();

const { media, mediaType } = props;

const redirect = () => {
    router.push(APP_PATHS.Media.redirect(mediaType, media.id));
};
</script>

<style lang="scss" scoped>
.media-preview {
    cursor: pointer;

    &_meta {
        padding-top: 12px;
    }

    &_inner {
        display: flex;
        flex-direction: column;
    }

    &_poster {
    }

    &_title {
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
