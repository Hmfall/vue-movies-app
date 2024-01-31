import {
    CreatedBy,
    Entity,
    LastEpisodeToAir,
    Network,
    NextEpisodeToAir,
    ProductionCompany,
    ProductionCountry,
    Season,
    SpokenLanguage,
} from './common';
import { Genre } from './genre';

export interface TvDetailsQuery extends Entity<number> {}

export interface Tv {
    id: number;
    name: string;
    first_air_date: string;
    backdrop_path: string;
    genre_ids: number[];
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    popularity: number;
    vote_count: number;
    vote_average: number;
}

export interface TvDetails {
    backdrop_path: string;
    created_by: CreatedBy[];
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: LastEpisodeToAir;
    name: string;
    next_episode_to_air?: NextEpisodeToAir;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    seasons: Season[];
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
}
