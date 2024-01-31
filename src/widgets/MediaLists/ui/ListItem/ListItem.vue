<template>
    <article class="list">
        <div class="list_inner">
            <div class="list_name">
                <Typography
                    size="xl"
                    bold
                >
                    {{ name }}
                </Typography>
            </div>
            <div class="list_swiper">
                <Loader v-if="isLoading" />
                <ListMediaContent
                    v-else-if="data"
                    :media-list="data.results"
                    :media-type="mediaType"
                />
                <Typography v-else> Error</Typography>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import { mediaApi } from '@/entities/media';
import type { MediaList } from '@/entities/media';
import { Loader, Typography } from '@/shared/ui';
import ListMediaContent from '../ListMediaContent/ListMediaContent.vue';

interface Props {
    mediaList: MediaList;
}

const props = defineProps<Props>();

const { name, mediaList, mediaType } = props.mediaList;

const { data, isLoading } = mediaApi.useMediaLists({
    mediaType,
    mediaList,
});
</script>

<style scoped lang="scss">
.list {
    padding: 28px 0;

    &_inner {
    }

    &_name {
        margin-bottom: 16px;
    }
}
</style>
