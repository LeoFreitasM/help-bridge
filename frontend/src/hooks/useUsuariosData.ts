import type { UsuariosData } from '../interface/UsuariosData';
import { useQuery } from '@tanstack/react-query';
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