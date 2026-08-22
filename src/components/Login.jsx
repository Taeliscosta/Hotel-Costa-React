import { useState } from 'react';
import { useNavigate } from 'react-router';
import { fazerLogin } from '../services/api';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setErro('');
    setCarregando(true);
    
    try {
      const usuario = await fazerLogin(email, senha);
      onLogin(usuario);
      navigate('/dashboard'); 
    } catch (err) {
      setErro(err.message);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-titulo">Hotel Costa</h1>
      
      <div className="login-box">
        <h2>Acesso ao Sistema</h2>
        
        {erro && <p className="erro">{erro}</p>}
        
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="E-mail corporativo" 
            required
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Senha" 
            required
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
          />
          <button type="submit" disabled={carregando}>
            {carregando ? 'Aguarde...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;