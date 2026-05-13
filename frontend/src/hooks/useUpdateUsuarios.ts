import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usuariosService } from "../services/usuariosService";


export function useUpdateUsuarios() {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: usuariosService.putUsuarios,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["usuarios-data"] });
        }
    });
}