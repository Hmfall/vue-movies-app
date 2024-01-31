<template>
    <div class="container">
        <div class="media">
            <div class="media_inner">
                <div class="media_details">
                    <Loader
                        v-if="isLoadingMedia"
                        absolute
                    />
                    <Error v-else-if="isErrorMedia" />
                    <MediaDetails
                        v-else
                        :media="media"
                    />
                </div>
                <div class="media_credits">
                    <CreditList
                        v-if="!isLoadingCredits && credits"
                        :credits="credits"
                    />
                    <Error v-else-if="isErrorCredits" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { CreditList } from '@/entities/credit';
import { mediaApi } from '@/entities/media';
import { MediaType } from '@/shared/api/types';
import { Error, Loader } from '@/shared/ui';
import { MediaDetails } from '@/widgets/MediaDetails';

const route = useRoute();

const { mediaType, id } = route.params;

const {
    data: media,
    isLoading: isLoadingMedia,
    isError: isErrorMedia,
} = mediaApi.useMediaDetails({
    id: Number(id),
    mediaType: mediaType as MediaType,
});

const {
    data: credits,
    isLoading: isLoadingCredits,
    isError: isErrorCredits,
} = mediaApi.useMediaCredits({
    id: Number(id),
    mediaType: mediaType as MediaType,
});
</script>

<style scoped lang="scss">
@import '@/shared/ui/styles/variables';

.media {
    &_inner {
        display: flex;
        flex-direction: column;
        row-gap: 28px;

        @media (max-width: $md) {
            align-items: center;
            row-gap: 24px;
        }
    }

    &_details {
    }

    &_credits {
        width: 100%;
    }
}
</style>
