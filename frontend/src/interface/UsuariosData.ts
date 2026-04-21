export interface CreateUsuariosData {
  name: string;
  email: string;
  password: string;
  profile: string;
}

export interface UsuariosData extends CreateUsuariosData {
  id: number;
} 