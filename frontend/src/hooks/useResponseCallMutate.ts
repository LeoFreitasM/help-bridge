import { useMutation, useQueryClient } from "@tanstack/react-query";
import { callsService } from "../services/callsService";

export function useResponseCallMutate() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: callsService.putCalls,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["calls-data"] });
        }
    });

}