import { Genre } from '../types';
import {
    BelongsToCollection,
    Dates,
    Entity,
    Paginated,
    ProductionCompany,
    ProductionCountry,
    SpokenLanguage,
} from './common';

export interface MovieDetailsQuery extends Entity<number> {}

export interface MoviesNowPlaying {
    page: number;
    results: Movie[];
    dates: Dates;
    total_pages: number;
    total_results: number;
}

export interface PopularMovies extends Paginated<Movie> {}

export interface Movie {
    id: number;
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

export interface MovieDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: BelongsToCollection;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
