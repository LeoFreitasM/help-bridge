import { useQuery } from "@tanstack/react-query";
import { callsService } from "../services/callsService";
import type { CallsData } from "../interface/CallsData";

export function useCallsData() {
    const query = useQuery<CallsData[]>({
        queryKey: ["calls-data"],
        queryFn: callsService.getCalls,
        retry: 2
    })

    return {
        ...query,
        data: query.data
    }

}

