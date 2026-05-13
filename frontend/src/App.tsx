import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Login from './components/login/login';
import Calls from './components/calls/calls';
import Usuarios from './components/usuarios/usuarios';

function UsuariosRoute() {

  const role = localStorage.getItem("role");

  if (role !== "ROLE_ADMIN") {
    return <Navigate to="/calls" />;
  }

  return <Usuarios />;
}

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Login />} />

        <Route path='/calls' element={<Calls />} />

        <Route path='/usuarios' element={<UsuariosRoute />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;