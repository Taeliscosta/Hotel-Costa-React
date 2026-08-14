import { useState } from 'react';
import { useNavigate, Link } from 'react-router';

function Login({ usuarios, onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErro('');
    
    const usuario = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );
    if (!usuario) {
      setErro('E-mail ou senha inválidos.');
      return;
    }
    onLogin(usuario);
    navigate('/home');
  }

  return (
    <div className="card">
      <h2>Acesso ao Sistema</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="E-mail corporativo" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        {erro && <p className="erro">{erro}</p>}
        <button type="submit">Entrar</button>
      </form>
      <p>Novo funcionário? <Link to="/cadastro">Solicitar acesso</Link></p>
    </div>
  );
}

export default Login;