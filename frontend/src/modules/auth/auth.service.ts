import { api } from "../../api/api";


interface LoginResponse {
    token: string;
}

export const loginRequest = async (email: string, password: string): Promise<string> => {
    const response = await api.post<LoginResponse>("/auth/login", { email, password });
    const token = response.data.token;
    localStorage.setItem("token", token);
    return token;
};
