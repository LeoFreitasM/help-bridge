import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usuariosService } from "../services/usuariosService";


export function useUsuariosDataMutate() {
    const queryClient = useQueryClient();
    
    const mutate = useMutation({
        mutationFn: usuariosService.postUsuarios,
        retry: 2,
        onSuccess: () =>{
            queryClient.invalidateQueries({queryKey: ["usuarios-data"]})
        }
    })

    return mutate;

}