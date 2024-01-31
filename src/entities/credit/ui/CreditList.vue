<template>
    <div class="credits">
        <div class="credits_inner">
            <div class="credits_title">
                <Typography
                    size="l"
                    bold
                >
                    {{ props.type === 'cast' ? 'В главных ролях' : 'Создатели' }}
                </Typography>
            </div>
            <swiper
                v-bind="swiperProps"
                virtual
            >
                <swiper-slide
                    v-for="credit in type === 'cast'
                        ? props.credits.cast
                        : props.credits.crew"
                    :key="credit.id"
                    :virtual-index="credit.id"
                    class="swiper-slide"
                >
                    <CreditCard :credit="credit" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Navigation, Virtual } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Credits } from '@/shared/api/types';
import { Typography } from '@/shared/ui';
import CreditCard from './CreditCard.vue';

interface Props {
    credits: Credits;
    type?: 'cast' | 'crew';
}

const modules = [Navigation, Virtual];

const props = withDefaults(defineProps<Props>(), {
    type: 'cast',
});

const swiperProps: SwiperOptions = {
    slidesPerView: 3.2,
    spaceBetween: 15,
    navigation: true,
    slidesPerGroup: 4,
    lazyPreloadPrevNext: 4,
    breakpoints: {
        576: {
            slidesPerView: 4.2,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 7,
        },
        1280: {
            slidesPerView: 8,
        },
    },
    modules,
};
</script>

<style scoped lang="scss">
.credits {
    &_inner {
        width: 100%;
    }

    &_title {
        margin-bottom: 18px;
    }
}
</style>
