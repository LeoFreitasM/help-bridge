
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Calls from './components/calls/calls';
import Usuarios from './components/usuarios/usuarios';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/calls' element={<Calls />} />
        <Route path='/usuarios' element={<Usuarios />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
