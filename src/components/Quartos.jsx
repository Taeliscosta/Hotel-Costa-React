import { useState, useEffect } from 'react';
import { listarQuartos, criarQuarto } from '../services/api';

function Quartos() {
  const [quartos, setQuartos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');
  
  const [mostrarForm, setMostrarForm] = useState(false);
  const [novoQuarto, setNovoQuarto] = useState({ numero: '', tipo: 'Standard', preco: '' });

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    try {
      setCarregando(true);
      const dados = await listarQuartos();
      setQuartos(dados);
    } catch (err) {
      setErro(err.message);
    } finally {
      setCarregando(false);
    }
  }

  async function handleCriar(e) {
    e.preventDefault();
    try {
      await criarQuarto(novoQuarto);
      setNovoQuarto({ numero: '', tipo: 'Standard', preco: '' });
      setMostrarForm(false);
      carregarDados();
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="tela-conteudo">
      <header className="tela-header">
        <div>
          <h2>Quartos</h2>
          <p>Disponibilidade e detalhes dos quartos</p>
        </div>
        <button className="btn-primario" onClick={() => setMostrarForm(!mostrarForm)}>
          {mostrarForm ? 'Cancelar' : '+ Novo Quarto'}
        </button>
      </header>

      {mostrarForm && (
        <form className="form-inline" onSubmit={handleCriar}>
          <input placeholder="Número (ex: 101)" required value={novoQuarto.numero} onChange={e => setNovoQuarto({...novoQuarto, numero: e.target.value})} />
          <select value={novoQuarto.tipo} onChange={e => setNovoQuarto({...novoQuarto, tipo: e.target.value})}>
            <option value="Simples">Simples</option>
            <option value="Standard">Standard</option>
            <option value="Luxo">Luxo</option>
            <option value="Suite">Suite</option>
          </select>
          <input placeholder="Preço da diária (ex: 150.00)" type="number" step="0.01" required value={novoQuarto.preco} onChange={e => setNovoQuarto({...novoQuarto, preco: e.target.value})} />
          <button type="submit" className="btn-primario">Salvar Quarto</button>
        </form>
      )}

      {carregando && <p>Carregando quartos da API...</p>}
      {erro && <p className="erro">{erro}</p>}

      <div className="grid-quartos">
        {!carregando && !erro && quartos.map((q) => (
          <div key={q.id} className="card-quarto">
            <div className="quarto-header">
              <span className="quarto-label">QUARTO</span>
              <span className={q.disponivel ? 'status-disponivel' : 'status-ocupado'}>
                {q.disponivel ? '● Disponível' : '● Ocupado'}
              </span>
            </div>
            <h3>#{q.numero}</h3>
            <div className="quarto-footer">
              <span className="quarto-tipo">{q.tipo}</span>
              <span className="quarto-preco">
                <strong>R$ {Number(q.preco).toFixed(2).replace('.', ',')}</strong>/diária
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quartos;