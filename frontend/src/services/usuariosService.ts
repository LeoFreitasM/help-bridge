import { api } from "../api/api";
import type { CreateUsuariosData, UsuariosData } from "../interface/UsuariosData";

export const usuariosService = {

     postUsuarios: async (data: CreateUsuariosData): Promise<UsuariosData> => {
        const response = await api.post<UsuariosData>("/usuarios/newUsuario", data);
        return response.data;
    },

    getUsuarios: async (): Promise<UsuariosData[]> => {
        const response = await api.get<UsuariosData[]>("/usuarios");
        return response.data;
    }

   

}