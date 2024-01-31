import { MovieList, TvList } from '@/entities/media';
import type { MediaList } from '@/entities/media';
import { MediaTypeEnum } from '@/shared/api/types';

export const MEDIA_LISTS: MediaList[] = [
    {
        name: 'Популярные фильмы',
        mediaType: MediaTypeEnum.movie,
        mediaList: MovieList.popular,
    },
    {
        name: 'Самые рейтинговые сериалы',
        mediaType: MediaTypeEnum.tv,
        mediaList: TvList.topRated,
    },
    {
        name: 'В эфире',
        mediaType: MediaTypeEnum.tv,
        mediaList: TvList.onTheAir,
    },
    {
        name: 'Скоро на экранах',
        mediaType: MediaTypeEnum.movie,
        mediaList: MovieList.upcoming,
    },
];
