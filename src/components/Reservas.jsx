import { useState, useEffect } from 'react';
import { listarReservas, criarReserva, listarClientes, listarQuartos, deletarReserva } from '../services/api';

function Reservas() {
  const [reservas, setReservas] = useState([]);
  const [clientes, setClientes] = useState([]); 
  const [quartos, setQuartos] = useState([]);   
  
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  const [mostrarForm, setMostrarForm] = useState(false);
  const [novaReserva, setNovaReserva] = useState({ clienteId: '', quartoId: '', dataEntrada: '', dataSaida: '' });

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    try {
      setCarregando(true);
      const [dadosReservas, dadosClientes, dadosQuartos] = await Promise.all([
        listarReservas(),
        listarClientes(),
        listarQuartos()
      ]);
      
      setReservas(dadosReservas);
      setClientes(dadosClientes);
      setQuartos(dadosQuartos);
    } catch (err) {
      setErro('Erro ao carregar dados do banco.');
    } finally {
      setCarregando(false);
    }
  }

  async function handleCriar(e) {
    e.preventDefault();
    try {
      await criarReserva(novaReserva);
      setNovaReserva({ clienteId: '', quartoId: '', dataEntrada: '', dataSaida: '' });
      setMostrarForm(false);
      carregarDados();
    } catch (err) {
      alert(err.message);
    }
  }

  async function handleCancelar(id) {
    if (window.confirm('Tem certeza que deseja cancelar esta reserva?')) {
      try {
        await deletarReserva(id);
        setReservas(reservas.filter(r => r.id !== id));
      } catch (err) {
        alert('Erro ao cancelar reserva.');
      }
    }
  }

  const getNomeCliente = (id) => clientes.find(c => c.id === id)?.nome || `Cliente #${id}`;
  const getNumeroQuarto = (id) => quartos.find(q => q.id === id)?.numero || `Quarto #${id}`;

  return (
    <div className="tela-conteudo">
      <header className="tela-header">
        <div>
          <h2>Reservas</h2>
          <p>Consulte e gerencie todas as reservas</p>
        </div>
        <button className="btn-primario" onClick={() => setMostrarForm(!mostrarForm)}>
          {mostrarForm ? 'Ocultar' : '+ Nova Reserva'}
        </button>
      </header>

      {mostrarForm && (
        <form className="form-inline" onSubmit={handleCriar}>
          <select required value={novaReserva.clienteId} onChange={e => setNovaReserva({...novaReserva, clienteId: e.target.value})}>
            <option value="">Selecione o Cliente...</option>
            {clientes.map(c => (
              <option key={c.id} value={c.id}>{c.nome}</option>
            ))}
          </select>

          <select required value={novaReserva.quartoId} onChange={e => setNovaReserva({...novaReserva, quartoId: e.target.value})}>
            <option value="">Selecione o Quarto Livre...</option>
            {quartos
              .filter(q => q.disponivel) 
              .map(q => (
              <option key={q.id} value={q.id}>Quarto #{q.numero} ({q.tipo})</option>
            ))}
          </select>

          <input type="date" required title="Data de Entrada" value={novaReserva.dataEntrada} onChange={e => setNovaReserva({...novaReserva, dataEntrada: e.target.value})} />
          <input type="date" required title="Data de Saída" value={novaReserva.dataSaida} onChange={e => setNovaReserva({...novaReserva, dataSaida: e.target.value})} />
          <button type="submit" className="btn-primario">Salvar Reserva</button>
        </form>
      )}

      <div className="card-tabela">
        {carregando && <p>Carregando reservas da API...</p>}
        {erro && <p className="erro">{erro}</p>}
        
        {!carregando && !erro && (
          <table className="tabela-padrao">
            <thead>
              <tr>
                <th>CLIENTE</th>
                <th>QUARTO</th>
                <th>ENTRADA</th>
                <th>SAÍDA</th>
                <th>STATUS</th>
                <th>AÇÕES</th> 
              </tr>
            </thead>
            <tbody>
              {reservas.map((r) => (
                <tr key={r.id}>
                  <td><strong>{getNomeCliente(r.clienteId)}</strong></td>
                  <td>Quarto #{getNumeroQuarto(r.quartoId)}</td>
                  <td>{r.dataEntrada}</td>
                  <td>{r.dataSaida}</td>
                  <td><span className="status-disponivel">● Ativa</span></td>
                  <td>
                    <button 
                      onClick={() => handleCancelar(r.id)} 
                      className="btn-icone" 
                      style={{ fontSize: '14px', fontWeight: 'bold' }}
                    >
                      ❌ Cancelar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Reservas;