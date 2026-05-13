export interface CreateUsuariosData {
  name: string;
  email: string;
  password: string;
  profile: string;
}

export interface UsuariosData extends CreateUsuariosData {
  id: number;
} 

export type UpdateUsuariosData = {
  id: number;
} & Partial<Omit<CreateUsuariosData, "password">>;

export type DeleteUsuariosData = {
  id: number;
} & Partial<Omit<CreateUsuariosData, "name" | "email" | "password" | "profile">>;