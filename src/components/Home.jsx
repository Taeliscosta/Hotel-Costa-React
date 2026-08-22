import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { listarClientes } from '../services/api';

function Home({ usuarioLogado, onSair }) {
  const [clientes, setClientes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    listarClientes()
      .then(setClientes)
      .catch((err) => setErro(err.message))
      .finally(() => setCarregando(false));
  }, []);

  if (!usuarioLogado) {
    navigate('/login');
    return null;
  }

  return (
    <div className="card">
      <h2>Painel do Hotel 🏨</h2>
      <p>Bem-vindo(a) ao turno, <strong>{usuarioLogado.nome}</strong>!</p>
      
      <hr />
      
      <h3>Clientes Cadastrados no Banco ({clientes.length})</h3>
      
      {carregando && <p>⏳ Carregando clientes da API...</p>}
      {erro && <p className="erro">⚠️ {erro}</p>}
      
      {!carregando && !erro && (
        <ul>
          {clientes.map((c) => (
            <li key={c.id}>
              <strong>{c.nome}</strong> — CPF: {c.cpf}
            </li>
          ))}
        </ul>
      )}
      
      <button onClick={() => { onSair(); navigate('/login'); }} style={{ marginTop: '15px', background: '#C0392B' }}>
        Encerrar Sessão
      </button>
    </div>
  );
}
export default Home;