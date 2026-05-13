export interface CreateCallData {
  title: string;
  description: string;
  department: string;
  priority: "LOW" | "MEDIUM" | "HIGH"; 
}

export interface CallsData extends CreateCallData {
  id: number;
  status: string;
  usuario: string;
  adminResponse: string;
}

export interface UpdateCallData {
  id: number;
  title: string;
  description: string;
  department: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  usuario: string;
  adminResponse: string;

}

export interface DeleteCallData {
  id: number;
}
