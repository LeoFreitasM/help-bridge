import type { CallsData, CreateCallData } from "../interface/CallsData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/api";


const postData = async (data: CreateCallData): Promise<CallsData> => {
  const response = await api.post<CallsData>("/calls", data);
  return response.data;
};


export function useCallsDataMutate() {
    const queryClient = useQueryClient();
    
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () =>{
            queryClient.invalidateQueries({queryKey: ["calls-data"]})
        }
    })

    return mutate;
    

}