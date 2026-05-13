import { useMutation, useQueryClient } from "@tanstack/react-query";
import { callsService } from "../services/callsService";

export function useDeleteCallsData() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: callsService.deleteCalls,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["calls-data"] });
        }
    })

}