import { MediaTypeEnum, MovieDetails, TvDetails } from '@/shared/api/types';
import type { MediaDetails } from '../model/types';

export const mapMovieDetails = (media: MovieDetails): MediaDetails => {
    return {
        id: media.id,
        name: media.title,
        media_type: MediaTypeEnum.movie,
        original_name: media.original_title,
        overview: media.overview,
        backdrop_path: media.backdrop_path,
        vote_average: media.vote_average,
        vote_count: media.vote_count,
        genres: media.genres,
        popularity: media.popularity,
        poster_path: media?.poster_path,
        production_companies: media.production_companies,
        production_countries: media.production_countries,
        original_language: media.original_language,
        release_date: media.release_date,
        tagline: media.tagline,
        runtime: media.runtime,
        revenue: media.revenue,
        budget: media.budget,
    };
};

export const mapTvDetails = (media: TvDetails): MediaDetails => {
    return {
        id: media.id,
        name: media.name,
        media_type: MediaTypeEnum.tv,
        original_name: media.original_name,
        overview: media.overview,
        backdrop_path: media.backdrop_path,
        vote_average: media.vote_average,
        vote_count: media.vote_count,
        genres: media.genres,
        popularity: media.popularity,
        poster_path: media?.poster_path,
        production_companies: media.production_companies,
        production_countries: media.production_countries,
        original_language: media.original_language,
        release_date: media.first_air_date,
        tagline: media.tagline,
        runtime: media.episode_run_time,
        number_of_episodes: media?.number_of_episodes,
        number_of_seasons: media?.number_of_seasons,
        last_episode_to_air: media?.last_episode_to_air,
        next_episode_to_air: media?.next_episode_to_air,
    };
};
