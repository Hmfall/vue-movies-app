import {
    CreatedBy,
    CreditsQuery,
    Genre,
    LastEpisodeToAir,
    MediaDiscoverQuery,
    MediaType,
    MovieDetailsQuery,
    NextEpisodeToAir,
    ProductionCompany,
    ProductionCountry,
    TvDetailsQuery,
} from '@/shared/api/types';

export interface MediaDetailsQuery extends MovieDetailsQuery, TvDetailsQuery {
    mediaType: MediaType;
}

export interface MediaDiscoverQueryOptions extends MediaDiscoverQuery {
    mediaType: MediaType;
}

export interface CreditsQueryOptions extends CreditsQuery {
    mediaType: MediaType;
}

export interface MediaDetails {
    id: number;
    name: string;
    media_type: MediaType;
    original_name: string;
    overview: string;
    backdrop_path: string;
    created_by?: CreatedBy[];
    vote_average: number;
    vote_count: number;
    genres: Genre[];
    popularity: number;
    poster_path?: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    original_language: string;
    release_date: string;
    tagline: string;
    runtime: number | number[];
    revenue?: number;
    budget?: number;
    number_of_episodes?: number;
    number_of_seasons?: number;
    last_episode_to_air?: LastEpisodeToAir;
    next_episode_to_air?: NextEpisodeToAir;
}

export enum MovieList {
    popular = 'popular',
    nowPlaying = 'nowPlaying',
    topRated = 'topRated',
    upcoming = 'upcoming',
}

export enum TvList {
    popular = 'popular',
    airingToday = 'airingToday',
    topRated = 'topRated',
    onTheAir = 'onTheAir',
}

export interface MediaListQueryOptions {
    mediaType: MediaType;
    mediaList: MovieList | TvList;
}

export interface MediaList {
    name: string;
    mediaType: MediaType;
    mediaList: MovieList | TvList;
}
