import type { UsuariosData } from '../interface/UsuariosData';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { usuariosService } from '../services/usuariosService';

export function useUsuariosData() {
 const query = useQuery<UsuariosData[]>({
        queryKey: ["usuarios-data"],
        queryFn: usuariosService.getUsuarios,
        retry: 2
    })

    return{
        ...query,
        data: query.data
    }

}

export function findById() {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: usuariosService.getProfile,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["usuarios-data"] });
        }
    });
}