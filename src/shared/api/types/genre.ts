import { MediaType } from './common';

export interface Genre {
    id: number;
    name: string;
}

export interface Genres {
    genres: Genre[];
}

export interface GenresQueryOptions {
    mediaType: MediaType;
}
