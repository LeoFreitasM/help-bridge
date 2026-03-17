import { useState } from 'react';
import './login.css';
import axios from 'axios';

const API_URL = "http://localhost:8080";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

   const handleLogin = async () => {
    try {
      const response = await axios.post(API_URL + "/auth/login", { email, password });
      const token = response.data.token;

      localStorage.setItem("token", token);

      window.location.reload();
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao fazer login");
    }
  };

  return (
    <div >

    
      <div className='help'>
        <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
        <h1>HelpBridge</h1>
      </div>
  
    

      <div className='card-form'>

        <h3>Bem-vindo de volta</h3>
        <p>Entre com suas credenciais para acessar o sistema</p>

        <form className='form-login' action="">
          <label htmlFor="email">E-mail</label>
          <div className='input-with-icon'>
            <svg
              className="mail-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <input type="email" placeholder="seu@Email.com" value={email} onChange={e => setEmail(e.target.value)}/>
          </div>


          <label htmlFor="password">Senha</label>
          <div className='input-with-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <input type="password" placeholder='••••••••' value={password}
              onChange={e => setPassword(e.target.value)}/>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

            <button type='button' onClick={handleLogin}>Entrar</button>

        </form>
        </div>
        

      </div>

      

    

  )
}

export default Login