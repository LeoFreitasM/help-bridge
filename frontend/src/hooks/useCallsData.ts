import axios, { } from "axios";
import type { CallsData } from "../interface/CallsData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async (): Promise<CallsData[]> => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Usuario não autenticado");

    const response = await axios.get(API_URL + "/calls", {
        headers: {
            Authorization: `Bearer ${token}` // template string correta
        }
    });

    return response.data;
}

export function useCallsData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ["calls-data"],
        retry: 2
    })

    return {
        ...query,
        data: query.data
    }

}