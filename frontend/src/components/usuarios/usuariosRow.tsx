interface UsuariosRowProps {
    id: number;
    name: string;
    email: string;
    profile: string;
}

const getProfileLabel  = (profile: string) => {
  if (profile === "ROLE_ADMIN") return "Administrador";
  if (profile === "ROLE_USER") return "Usuário Comum";
  return profile;
};

export function UsuariosRow({ id, name, email, profile }: UsuariosRowProps) {

    return (
     
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{getProfileLabel(profile)}</td>
      <td>
        <div className="action-buttons">
          <button
            className="action-btn edit-btn"
            /*onClick={() => handleEditUser(user)}*/
            title="Editar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-fg-b9qd101="57.12:57.15049:/src/app/pages/Users.tsx:327:25:9716:8:e:Edit::::::C5F4" data-fgid-b9qd101=":r9g:"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></svg>
          </button>
          <button
            className="action-btn delete-btn"
            /*onClick={() => handleDeleteUser(user.id)}*/
            title="Excluir"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0  24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-fg-b9qd103="57.12:57.15049:/src/app/pages/Users.tsx:334:25:9999:10:e:Trash2::::::c98" data-fgid-b9qd103=":r9i:"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
            
          </button>
        </div>
      </td>
    </tr>
  );
}