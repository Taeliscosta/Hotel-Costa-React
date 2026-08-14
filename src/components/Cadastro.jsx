import { useState } from 'react';
import { useNavigate, Link } from 'react-router';

function Cadastro({ usuarios, onCadastrar }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErro('');
    if (!nome || !email || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }
    if (usuarios.some((u) => u.email === email)) {
      setErro('Este e-mail já está cadastrado no hotel.');
      return;
    }
    onCadastrar({ nome, email, senha });
    navigate('/login');
  }

  return (
    <div className="card">
      <h2>Cadastrar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        {erro && <p className="erro">{erro}</p>}
        <button type="submit">Cadastrar</button>
      </form>
      <p>Já possui acesso? <Link to="/login">Fazer login</Link></p>
    </div>
  );
}

export default Cadastro;