import { useMutation, useQueryClient } from "@tanstack/react-query";
import { callsService } from "../services/callsService";


type UpdateCallStatusData = {
    callId: number;
    status: string;
};

export function useUpdateCallStatusMutate() {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: async ({callId, status}: UpdateCallStatusData) => 
            callsService.updateCallStatus(callId, status),
        retry: 2,
        onSuccess: () =>{
            queryClient.invalidateQueries({queryKey: ["calls-data"]})
        }
    });
}  