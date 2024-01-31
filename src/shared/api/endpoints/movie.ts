import { AxiosResponse } from 'axios';
import {
    Credits,
    CreditsQuery,
    MediaDiscoverQuery,
    Paginated,
} from '@/shared/api/types';
import { Movie, MovieDetails } from '../types/movie';
import { BaseEndpoint } from './base';

const BASE = '/movie';

export class MovieEndpoint extends BaseEndpoint {
    constructor(protected readonly accessToken: string) {
        super(accessToken);
    }

    async details(movie_id: number): Promise<AxiosResponse<MovieDetails>> {
        return this.api.get<MovieDetails>(`${BASE}/${movie_id}`);
    }

    async discover(
        query: MediaDiscoverQuery,
    ): Promise<AxiosResponse<Paginated<Movie>>> {
        return this.api.get<Paginated<Movie>>(`discover/${BASE}`, query);
    }

    async popular(): Promise<AxiosResponse<Paginated<Movie>>> {
        return this.api.get<Paginated<Movie>>(`${BASE}/popular`);
    }

    async upcoming(): Promise<AxiosResponse<Paginated<Movie>>> {
        return this.api.get<Paginated<Movie>>(`${BASE}/upcoming`);
    }

    async topRated(): Promise<AxiosResponse<Paginated<Movie>>> {
        return this.api.get<Paginated<Movie>>(`${BASE}/top_rated`);
    }

    async nowPlaying(): Promise<AxiosResponse<Paginated<Movie>>> {
        return this.api.get<Paginated<Movie>>(`${BASE}/now_playing`);
    }

    async credits(query: CreditsQuery): Promise<AxiosResponse<Credits>> {
        return this.api.get<Credits>(`${BASE}/${query.id}/credits`);
    }
}
