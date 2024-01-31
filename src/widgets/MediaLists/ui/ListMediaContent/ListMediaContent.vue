<template>
    <div class="list_content">
        <swiper
            v-bind="swiperProps"
            virtual
        >
            <swiper-slide
                v-for="mediaItem in props.mediaList"
                :key="mediaItem.id"
                :virtual-index="mediaItem.id"
                class="swiper-slide"
            >
                <MediaCard
                    :media="mediaItem"
                    :media-type="mediaType"
                />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup lang="ts">
import { Navigation, Virtual } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { MediaCard } from '@/entities/media';
import { Movie, Tv, MediaType } from '@/shared/api/types';

const modules = [Navigation, Virtual];

interface Props {
    mediaList: (Movie | Tv)[];
    mediaType: MediaType;
}

const props = defineProps<Props>();

const swiperProps: SwiperOptions = {
    slidesPerView: 1.2,
    spaceBetween: 15,
    navigation: true,
    slidesPerGroup: 3,
    lazyPreloadPrevNext: 1,
    breakpoints: {
        576: {
            slidesPerView: 2.15,
        },
        992: {
            slidesPerView: 4.2,
        },
    },
    modules,
};
</script>

<style scoped></style>
