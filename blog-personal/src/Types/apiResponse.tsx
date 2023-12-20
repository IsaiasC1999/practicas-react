export interface APIResponse {
    success: boolean;
    data:    ResponseAuth|string;
    message: string;
}

export interface ResponseAuth {
    token: string;
}
