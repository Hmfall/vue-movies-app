import { useQuery } from '@tanstack/vue-query';
import axios from 'src/shared/api/config';
import { TokenResponse } from '../model/types';

export const keys = {
    root: ['session'],
    queries: {
        requestToken: {
            root: () => [...keys.root, 'requestToken'],
        },
    },
    mutationions: {
        createSessionWithLogin: () => [...keys.root, 'createSessionWithLogin'],
        createSession: () => [...keys.root, 'createSession'],
        deleteSession: () => [...keys.root, 'deleteSession'],
    },
};

export const useSessionRequestToken = () => {
    return useQuery({
        queryKey: keys.queries.requestToken.root(),
        queryFn: async (): Promise<TokenResponse> => {
            return axios
                .get('authentication/token/new')
                .then((response) => response.data);
        },
        retry: 2,
    });
};
