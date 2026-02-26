import axios, { type AxiosPromise } from "axios";
import type { CallsData } from "../interface/CallsData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<CallsData[]> => {
    const response = axios.get(API_URL + "/calls");
    return response;
}

export function useCallsData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ["calls-data"],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }

}