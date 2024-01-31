import { useQuery } from '@tanstack/vue-query';
import { tmdbApi } from '@/shared/api';
import {
    Credits,
    MediaTypeEnum,
    Movie,
    MovieDetailsQuery,
    Paginated,
    Tv,
} from '@/shared/api/types';
import { mapMovieDetails, mapTvDetails } from '../lib/mapMedia';
import type {
    CreditsQueryOptions,
    MediaDetails,
    MediaDetailsQuery,
    MediaDiscoverQueryOptions,
    MediaListQueryOptions,
} from '../model/types';
import { MovieList, TvList } from '../model/types';

export const keys = {
    root: ['media'],
    queries: {
        /*tranding: {
            root: () => [...keys.root, 'tranding'],
            query: (query: MediaTrandingQueryOptions) => [
                ...keys.queries.tranding.root(),
                query,
            ],
        },*/
        lists: {
            root: () => [...keys.root, 'list'],
            query: (query: MediaListQueryOptions) => [
                ...keys.queries.lists.root(),
                query,
            ],
        },
        /*search: {
            root: () => [...keys.root, 'search'],
            query: (query: MediaSearchQueryOptions) => [
                ...keys.queries.search.root(),
                query,
            ],
        },*/
        discover: {
            root: () => [...keys.root, 'discover'],
            query: (query: MediaDiscoverQueryOptions) => [
                ...keys.queries.discover.root(),
                query,
            ],
        },
        details: {
            root: () => [...keys.root, 'details'],
            query: (query: MovieDetailsQuery) => [
                ...keys.queries.details.root(),
                query,
            ],
        },
        credits: {
            root: () => [...keys.root, 'credits'],
            query: (query: CreditsQueryOptions) => [
                ...keys.queries.credits.root(),
                query,
            ],
        },
    },
};

export const useDiscoverMedia = (query: MediaDiscoverQueryOptions) => {
    const { mediaType, ...params } = query;
    return useQuery({
        queryKey: keys.queries.discover.query(query),
        queryFn: async (): Promise<Paginated<Movie | Tv>> => {
            if (mediaType === MediaTypeEnum.movie)
                return tmdbApi.movie.discover(params).then((res) => res.data);
            return tmdbApi.tv.discover(params).then((res) => res.data);
        },
    });
};

export const useMediaDetails = (query: MediaDetailsQuery) => {
    const { mediaType, id } = query;
    return useQuery({
        queryKey: keys.queries.details.query(query),
        queryFn: async (): Promise<MediaDetails> => {
            if (mediaType === MediaTypeEnum.movie)
                return tmdbApi.movie
                    .details(id)
                    .then((res) => mapMovieDetails(res.data));
            return tmdbApi.tv.details(id).then((res) => mapTvDetails(res.data));
        },
    });
};

export const useMediaCredits = (query: CreditsQueryOptions) => {
    const { mediaType, id } = query;
    return useQuery({
        queryKey: keys.queries.credits.query(query),
        queryFn: async (): Promise<Credits> => {
            if (mediaType === MediaTypeEnum.movie)
                return tmdbApi.movie.credits({ id }).then((res) => res.data);
            return tmdbApi.tv.credits({ id }).then((res) => res.data);
        },
    });
};

export const useMediaLists = (query: MediaListQueryOptions) => {
    const { mediaType, mediaList } = query;
    return useQuery({
        queryKey: keys.queries.lists.query(query),
        queryFn: async (): Promise<Paginated<Tv> | Paginated<Movie>> => {
            if (mediaType === MediaTypeEnum.tv)
                return useTvList(mediaList as TvList);
            return useMovieList(mediaList as MovieList);
        },
    });
};

const useMovieList = async (list: MovieList): Promise<Paginated<Movie>> => {
    switch (list) {
        case MovieList.popular:
            return tmdbApi.movie.popular().then((res) => res.data);
        case MovieList.nowPlaying:
            return tmdbApi.movie.nowPlaying().then((res) => res.data);
        case MovieList.upcoming:
            return tmdbApi.movie.upcoming().then((res) => res.data);
        case MovieList.topRated:
            return tmdbApi.movie.topRated().then((res) => res.data);
        default:
            throw new Error();
    }
};

const useTvList = async (list: TvList): Promise<Paginated<Tv>> => {
    switch (list) {
        case TvList.popular:
            return tmdbApi.tv.popular().then((res) => res.data);
        case TvList.airingToday:
            return tmdbApi.tv.airingToday().then((res) => res.data);
        case TvList.onTheAir:
            return tmdbApi.tv.onTheAir().then((res) => res.data);
        case TvList.topRated:
            return tmdbApi.tv.topRated().then((res) => res.data);
        default:
            throw new Error();
    }
};
