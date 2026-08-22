import { useState, useEffect } from 'react';
import { listarClientes, deletarCliente, criarCliente } from '../services/api';

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');
  
  const [mostrarForm, setMostrarForm] = useState(false);
  const [novoCliente, setNovoCliente] = useState({ nome: '', cpf: '', telefone: '', email: '' });

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    try {
      setCarregando(true);
      const dados = await listarClientes();
      setClientes(dados);
    } catch (err) {
      setErro(err.message);
    } finally {
      setCarregando(false);
    }
  }

  async function handleDeletar(id) {
    if (window.confirm('Tem certeza que deseja excluir este cliente?')) {
      try {
        await deletarCliente(id);
        setClientes(clientes.filter(c => c.id !== id));
      } catch (err) {
        alert('Erro ao excluir cliente.');
      }
    }
  }

  async function handleCriar(e) {
    e.preventDefault();
    try {
      await criarCliente(novoCliente);
      setNovoCliente({ nome: '', cpf: '', telefone: '', email: '' }); 
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
          <h2>Clientes</h2>
          <p>Gerencie os clientes cadastrados no sistema</p>
        </div>
        <button 
          className="btn-primario" 
          onClick={() => setMostrarForm(!mostrarForm)}
        >
          {mostrarForm ? 'Cancelar' : '+ Novo Cliente'}
        </button>
      </header>

      {mostrarForm && (
        <form className="form-inline" onSubmit={handleCriar}>
          <input placeholder="Nome" required value={novoCliente.nome} onChange={e => setNovoCliente({...novoCliente, nome: e.target.value})} />
          <input placeholder="CPF" required value={novoCliente.cpf} onChange={e => setNovoCliente({...novoCliente, cpf: e.target.value})} />
          <input placeholder="Telefone" value={novoCliente.telefone} onChange={e => setNovoCliente({...novoCliente, telefone: e.target.value})} />
          <input placeholder="E-mail" type="email" required value={novoCliente.email} onChange={e => setNovoCliente({...novoCliente, email: e.target.value})} />
          <button type="submit" className="btn-primario">Salvar</button>
        </form>
      )}

      <div className="card-tabela">
        {carregando && <p>Carregando clientes...</p>}
        {erro && <p className="erro">{erro}</p>}
        
        {!carregando && !erro && (
          <table className="tabela-padrao">
            <thead>
              <tr>
                <th>NOME</th>
                <th>CPF</th>
                <th>TELEFONE</th>
                <th>E-MAIL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((c) => (
                <tr key={c.id}>
                  <td><strong>{c.nome}</strong></td>
                  <td>{c.cpf}</td>
                  <td>{c.telefone || 'Não informado'}</td>
                  <td>{c.email}</td>
                  <td>
                    <button onClick={() => handleDeletar(c.id)} className="btn-icone" title="Excluir">🗑️</button>
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

export default Clientes;