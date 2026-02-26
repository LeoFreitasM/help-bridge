import axios, { } from "axios";
import type { CallsData, CreateCallData } from "../interface/CallsData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const postData = async (data: CreateCallData): Promise<CallsData> => {
  const response = await axios.post<CallsData>(API_URL + "/calls", data);
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