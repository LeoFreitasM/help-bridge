import {  useState } from 'react';
import { useUsuariosData } from '../../hooks/useUsuariosData';
import './usuarios.css';
import { UsuariosRow } from './usuariosRow';
import { CreateModal } from './usuarioCreate-modal';
import type { UsuariosData } from '../../interface/UsuariosData';


export default function Usuarios() {

  const { data } = useUsuariosData();

   const [isModalOpen, setIsModalOpen] = useState(false); 
   const [selectedUser, setSelectedUser] = useState<UsuariosData | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  }


    const handleOpenModal = () => {
      setSelectedUser(null);
      setIsModalOpen(false);
    }

    const handleCalls = () => {
      window.location.href = "/calls"
    }

  return (
  <div>

   <header className="dashboard-header">
          <div className="header-content">
            <div className="header-left">
              <div className="logo-container">
                <div className="logo-icon">
                  <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
                </div>
  
                <h1 className='logo-text'>HelpBridge</h1>
              </div>
              <div className="search-container">
                <search className='search-icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-fg-38d12="22.11:28.2:/src/app/pages/Dashboard.tsx:176:17:5525:34:e:Search::::::B9rK"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></search>
                <input
                  className='search-input'
                  type="text"
                  placeholder="Buscar usuários..."
                />
              </div>
            </div>
  
            <div className="header-actions">
              {isModalOpen  &&  <CreateModal selectedUser={selectedUser} closeModal={handleOpenModal} />}
              
              <button
                className="btn btn-primary"
                onClick={() => setIsModalOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='svg-mais' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-fg-38d16="22.11:28.2:/src/app/pages/Dashboard.tsx:192:17:6078:8:e:Plus::::::ISW"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Novo Usuario
              </button>
  
              <button className='btn btn-icon' onClick={handleCalls}>
              <svg data-name="Livello 1" id="Livello_1" width="20" height="20" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><path d="M116.73,31.83a3,3,0,0,0-4.2-.61L64.14,67.34a1,1,0,0,1-1.2,0L15.5,31.06a3,3,0,1,0-3.64,4.77L49.16,64.36,12.27,92.16A3,3,0,1,0,15.88,97L54.11,68.14l5.18,4a7,7,0,0,0,8.43.06l5.44-4.06L111.84,97a3,3,0,1,0,3.59-4.81L78.17,64.35,116.12,36A3,3,0,0,0,116.73,31.83Z"/><path d="M113,19H15A15,15,0,0,0,0,34V94a15,15,0,0,0,15,15h98a15,15,0,0,0,15-15V34A15,15,0,0,0,113,19Zm9,75a9,9,0,0,1-9,9H15a9,9,0,0,1-9-9V34a9,9,0,0,1,9-9h98a9,9,0,0,1,9,9Z"/></svg>              </button>
  
              <button className='btn btn-icon' onClick={handleLogout}>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" >
                  <path strokeLinecap="round" strokeLinejoin="round"  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>
  
              </button>
  
            </div>
          </div>
  
        </header>
      
      
      <h1>Usuários</h1>
      <p>Esta é a página de usuários. Aqui você pode gerenciar os usuários do sistema.</p>

      <div className='table-container'>
          <table className='users-table'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Perfil</th>
                <th>Ações</th>
              </tr>
            </thead>
            
            <tbody>
                {data?.map((usuario) => ( 
                <UsuariosRow
                  key={usuario.id}
                  id={usuario.id}
                  name={usuario.name}
                  email={usuario.email}
                  password={usuario.password}
                  profile={usuario.profile}
                />
                ))}
                
            </tbody>
          </table>

       </div>

    </div>
  )
}