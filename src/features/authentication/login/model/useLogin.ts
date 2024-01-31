import { ref, watch } from 'vue';
import { useMutation } from '@tanstack/vue-query';
import { AxiosError, isAxiosError } from 'axios';
import {
    RequestToken,
    Session,
    sessionApi,
    SessionResponse,
    TokenResponse,
} from '@/entities/session';
import axios from 'src/shared/api/config';
import { LoginParams, LoginRequestParams } from './types';

export const useLogin = (loginParams: LoginParams) => {
    const {
        data: sessionRequestToken,
        isSuccess: sessionRequestTokenIsSuccess,
        status: sessionRequestTokenStatus,
        error: sessionRequestTokenError,
    } = sessionApi.useSessionRequestToken();

    const data = ref<Session | undefined>();
    const error = ref<AxiosError | Error | unknown>();
    const isError = ref(false);

    const sessionWithLoginMutation = useSessionWithLogin();
    const createSessionWithLoginMutation = useCreateSessionWithLogin();

    const createSession = async (requestToken: RequestToken) => {
        try {
            const { success: sessionWithLoginMutationSuccess, request_token } =
                await sessionWithLoginMutation.mutateAsync({
                    ...loginParams,
                    request_token: requestToken,
                });

            if (!sessionWithLoginMutationSuccess || !request_token)
                throw new Error('Create Session (with login)');

            const { success: createSessionWithLoginMutationSuccess, session_id } =
                await createSessionWithLoginMutation.mutateAsync(request_token);

            if (!createSessionWithLoginMutationSuccess)
                throw new Error('Create Session');

            data.value = session_id;
        } catch (e) {
            isError.value = true;
            if (isAxiosError(e)) {
                error.value = e?.response?.data.status_message;
            } else if (e instanceof Error) {
                error.value = e?.message;
            }
        }
    };

    watch(
        () => sessionRequestTokenStatus.value,
        () => {
            if (
                sessionRequestTokenIsSuccess &&
                sessionRequestToken.value?.request_token
            ) {
                createSession(sessionRequestToken.value.request_token);
            } else error.value = sessionRequestTokenError.value;
        },
    );

    return {
        data,
        error,
        isError,
    };
};

export const useSessionWithLogin = () => {
    return useMutation({
        mutationKey: sessionApi.keys.mutationions.createSessionWithLogin(),
        mutationFn: (
            loginRequestParams: LoginRequestParams,
        ): Promise<TokenResponse> => {
            return axios
                .post('authentication/token/validate_with_login', loginRequestParams)
                .then((response) => response.data);
        },
    });
};

export const useCreateSessionWithLogin = () => {
    return useMutation({
        mutationKey: sessionApi.keys.mutationions.createSession(),
        mutationFn: (requestToken: RequestToken): Promise<SessionResponse> => {
            return axios
                .post('/authentication/session/new', {
                    request_token: requestToken,
                })
                .then((response) => response.data);
        },
    });
};

/*type useSessionWithLoginResults = UseMutationReturnType<
    IntermediateTokenResponse,
    DefaultError,
    IntermediateToken,
    unknown
>;

type useCreateSessionWithLoginResults = UseMutationReturnType<
    IntermediateToken,
    DefaultError,
    SessionResponse,
    unknown
>;*/
