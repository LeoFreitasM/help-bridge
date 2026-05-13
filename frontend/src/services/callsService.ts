import { api } from '../api/api';
import type { CallsData, CreateCallData, UpdateCallData } from '../interface/CallsData';

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
        const response = await api.put(`/calls/update/${callId}`, { status });
        return response.data;
    },

    putCalls: async (data: UpdateCallData ): Promise<CallsData> => {
        const response = await api.put(`/calls/update/${data.id}`, 
        {
            adminResponse: data.adminResponse
        });
        return response.data;
    },

    deleteCalls: async (id: number) => {
        await api.delete(`/calls/${id}`);
    }

}