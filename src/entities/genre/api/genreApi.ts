import { useQuery } from '@tanstack/vue-query';
import { tmdbApi } from '@/shared/api';
import { GenresQueryOptions, Genres } from '@/shared/api/types';

const keys = {
    root: ['genres'],
    queries: {
        genres: {
            query: (query: GenresQueryOptions) => [...keys.root, query],
        },
    },
};

export const useGenres = (query: GenresQueryOptions) => {
    const { mediaType } = query;
    return useQuery({
        queryKey: keys.queries.genres.query(query),
        queryFn: async (): Promise<Genres> => {
            return tmdbApi.genre.genres(mediaType).then((res) => res.data);
        },
    });
};
