import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080",
});

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    const publicRoutes = ["/auth/login", "/usuarios/newUsuario"];

      const isPublic = publicRoutes.some(route =>
        config.url?.includes(route)
    );

    if (token && !isPublic) {
        config.headers = config.headers ?? {};
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;

});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);