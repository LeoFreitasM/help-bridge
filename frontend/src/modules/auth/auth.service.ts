import { api } from "../../api/api";


interface LoginResponse {
    token: string;
}

interface LogoutResponse {
    message: string;
}

export const loginRequest = async (email: string, password: string): Promise<string> => {
    const response = await api.post<LoginResponse>("/auth/login", { email, password });
    const token = response.data.token;
    localStorage.setItem("token", token);
    
    return token;
};

export const logoutRequest = async (): Promise<string> => {
    const response = await api.post<LogoutResponse>("/auth/logout");
    localStorage.removeItem("token");
    return response.data.message;
}
