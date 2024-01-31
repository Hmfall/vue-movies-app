import { AxiosResponse } from 'axios';
import { MediaType } from '../types/common';
import { Genres } from '../types/genre';
import { BaseEndpoint } from './base';

export class GenreEndpoint extends BaseEndpoint {
    constructor(protected readonly accessToken: string) {
        super(accessToken);
    }

    async genres(mediaType: MediaType): Promise<AxiosResponse<Genres>> {
        return this.api.get<Genres>(`/genre/${mediaType}/list`);
    }
}
