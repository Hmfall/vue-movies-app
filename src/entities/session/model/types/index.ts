interface ErrorModel {
    status_code?: number;
    status_message?: string;
}

export type RequestToken = string;

export interface TokenResponse extends ErrorModel {
    success: boolean;
    expires_at?: string;
    request_token?: RequestToken;
}

export type Session = string;

export interface SessionResponse extends ErrorModel {
    session_id?: Session;
    success: boolean;
}
