import type { RequestToken } from '@/entities/session';

export interface LoginParams {
    username: string;
    password: string;
}

export interface LoginRequestParams extends LoginParams {
    request_token: RequestToken;
}
