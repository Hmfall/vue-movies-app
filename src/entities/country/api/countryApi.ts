import { useQuery } from '@tanstack/vue-query';
import { tmdbApi } from '@/shared/api';
import { Country } from '@/shared/api/types';

export const useCountries = () => {
    return useQuery({
        queryKey: ['countries'],
        queryFn: async (): Promise<Country[]> => {
            return tmdbApi.country.countries().then((res) => res.data);
        },
    });
};
