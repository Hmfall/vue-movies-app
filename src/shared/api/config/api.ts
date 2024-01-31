import axios, { AxiosResponse } from 'axios';

const BASE_URL_V3 = 'https://api.themoviedb.org/3';

export class Api {
    constructor(private accessToken: string) {
        this.accessToken = accessToken;
    }

    /* eslint-disable  @typescript-eslint/no-explicit-any */
    async get<T>(path: string, params?: any): Promise<AxiosResponse<T>> {
        const response = await axios.get<T>(`${BASE_URL_V3}${path}`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${this.accessToken}`,
            },
            params: {
                language: 'ru',
                ...params,
            },
        });

        return response;
    }
}
