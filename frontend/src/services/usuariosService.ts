import { api } from "../api/api";
import type { CreateUsuariosData, UpdateUsuariosData, UsuariosData } from "../interface/UsuariosData";

export const usuariosService = {

     postUsuarios: async (data: CreateUsuariosData): Promise<UsuariosData> => {
        const response = await api.post<UsuariosData>("/usuarios/newUsuario", data);
        return response.data;
    },

    getUsuarios: async (): Promise<UsuariosData[]> => {
        const response = await api.get<UsuariosData[]>("/usuarios");
        return response.data;
    },

 getProfile: async (id: number): Promise<UsuariosData> => {
   const response = await api.get<UsuariosData>(`/usuarios/${id}`);
   return response.data;
},

    putUsuarios: async (data: UpdateUsuariosData): Promise<UsuariosData> => {
        const response = await api.put(
        `/usuarios/update/${data.id}`,
        {
            name: data.name,
            email: data.email,
            profile: data.profile
        }
     );

        return response.data;   
    },

    deleteUsuarios: async (id: number): Promise<void> => {
        await api.delete(`/usuarios/${id}`);
    }

}