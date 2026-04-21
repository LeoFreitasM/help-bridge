import { api } from '../api/api';
import type { CallsData, CreateCallData } from '../interface/CallsData';

export const callsService = {

    postCalls: async (data: CreateCallData): Promise<CallsData> => {
        const response = await api.post<CallsData>("/calls", data);
        return response.data;
    },

    getCalls: async (): Promise<CallsData[]> => {
        const response = await api.get<CallsData[]>("/calls");
        return response.data;
    },

    updateCallStatus: async (callId: number, status: string) => {
        const response = await api.put(`/calls/${callId}/status`, { status });
        return response.data;
    }
}