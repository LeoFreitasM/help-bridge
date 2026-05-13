import { usuariosService } from "../services/usuariosService";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export function useDeleteUsuariosData() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: usuariosService.deleteUsuarios,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["usuarios-data"] });
        }
    })

}