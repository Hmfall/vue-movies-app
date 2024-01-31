import { AxiosResponse } from 'axios';
import {
    Credits,
    CreditsQuery,
    MediaDiscoverQuery,
    Movie,
    Paginated,
} from '@/shared/api/types';
import { Tv, TvDetails } from '../types/tv';
import { BaseEndpoint } from './base';

const BASE = '/tv';

export class TvEndpoint extends BaseEndpoint {
    constructor(protected readonly accessToken: string) {
        super(accessToken);
    }

    async details(series_id: number): Promise<AxiosResponse<TvDetails>> {
        return this.api.get<TvDetails>(`${BASE}/${series_id}`);
    }

    async discover(
        query: MediaDiscoverQuery,
    ): Promise<AxiosResponse<Paginated<Tv>>> {
        return this.api.get<Paginated<Tv>>(`discover/${BASE}`, query);
    }

    async popular(): Promise<AxiosResponse<Paginated<Tv>>> {
        return this.api.get<Paginated<Tv>>(`${BASE}/popular`);
    }

    async airingToday(): Promise<AxiosResponse<Paginated<Tv>>> {
        return this.api.get<Paginated<Tv>>(`${BASE}/airing_today`);
    }

    async topRated(): Promise<AxiosResponse<Paginated<Tv>>> {
        return this.api.get<Paginated<Tv>>(`${BASE}/top_rated`);
    }

    async onTheAir(): Promise<AxiosResponse<Paginated<Tv>>> {
        return this.api.get<Paginated<Tv>>(`${BASE}/on_the_air`);
    }

    async credits(query: CreditsQuery): Promise<AxiosResponse<Credits>> {
        return this.api.get<Credits>(`${BASE}/${query.id}/credits`);
    }
}
