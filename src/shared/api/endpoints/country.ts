import { AxiosResponse } from 'axios';
import { Country } from '../types/country';
import { BaseEndpoint } from './base';

export class CountryEndpoint extends BaseEndpoint {
    constructor(protected readonly accessToken: string) {
        super(accessToken);
    }

    async countries(): Promise<AxiosResponse<Country[]>> {
        return this.api.get<Country[]>(`/configuration/countries`);
    }
}
