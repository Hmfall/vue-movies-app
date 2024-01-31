<template>
    <div class="credit">
        <div class="credit_inner">
            <div class="credit_poster">
                <div
                    v-if="credit.profile_path"
                    class="credit_img"
                >
                    <img
                        :src="`http://image.tmdb.org/t/p/w276_and_h350_face/${credit.profile_path}`"
                        alt="credit_poster"
                        loading="lazy"
                    />
                    <div class="swiper-lazy-preloader"></div>
                </div>
            </div>
            <div class="credit_info">
                <Typography
                    class="credit_name"
                    size="m"
                    bold
                >
                    {{ props.credit.name }}
                </Typography>
                <Typography
                    class="credit_character-job"
                    size="s"
                >
                    {{ props.credit.name }}
                </Typography>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Cast, Crew } from '@/shared/api/types';
import { Typography } from '@/shared/ui';

interface Props {
    credit: Cast | Crew;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
@import '@/shared/ui/styles/variables';

.credit {
    &_inner {
        display: flex;
        flex-direction: column;
    }

    &_poster {
        position: absolute;
        background: var(--background-secondary);
    }

    &_info {
        padding: 130% 4px 4px;
    }

    &_name {
    }

    &_character-job {
        color: var(--foreground-secondary);
    }
}
</style>
