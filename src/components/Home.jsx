import { useNavigate } from 'react-router';

function Home({ usuarioLogado, usuarios, onSair }) {
  const navigate = useNavigate();
  
  if (!usuarioLogado) {
    navigate('/login');
    return null;
  }
  
  return (
    <div className="card">
      <h2>Painel do Hotel 🏨</h2>
      <p>Bem-vindo(a) ao turno, <strong>{usuarioLogado.nome}</strong>!</p>
      
      <hr />
      
      <h3>Equipe com Acesso ({usuarios.length})</h3>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            {u.nome} — {u.email}
          </li>
        ))}
      </ul>
      
      <button onClick={() => { onSair(); navigate('/login'); }} style={{ marginTop: '15px', background: '#C0392B' }}>
        Encerrar Sessão
      </button>
    </div>
  );
}

export default Home;