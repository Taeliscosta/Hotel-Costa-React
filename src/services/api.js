const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function fazerLogin(email, senha) {
    const resp = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, senha }),
    });
    const corpo = await resp.json();
    if (!resp.ok) throw new Error(corpo.message || 'Erro ao fazer login');
    return corpo;
}

export async function listarClientes() {
    const resp = await fetch(`${API_URL}/clientes`);
    if (!resp.ok) throw new Error('Falha ao listar clientes do banco.');
    return resp.json();
}

export async function listarQuartos() {
  const resp = await fetch(`${API_URL}/quartos`);
  if (!resp.ok) throw new Error('Falha ao carregar quartos.');
  return resp.json();
}

export async function listarReservas() {
  const resp = await fetch(`${API_URL}/reservas`);
  if (!resp.ok) throw new Error('Falha ao carregar reservas.');
  return resp.json();
}

export async function deletarCliente(id) {
  const resp = await fetch(`${API_URL}/clientes/${id}`, { method: 'DELETE' });
  if (!resp.ok) throw new Error('Falha ao deletar cliente.');
  return true;
}

export async function criarCliente(dados) {
  const resp = await fetch(`${API_URL}/clientes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  });
  if (!resp.ok) throw new Error('Falha ao cadastrar cliente.');
  return resp.json();
}

export async function criarQuarto(dados) {
  dados.preco = parseFloat(dados.preco);
  dados.disponivel = true;
  
  const resp = await fetch(`${API_URL}/quartos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  });
  if (!resp.ok) throw new Error('Falha ao cadastrar quarto.');
  return resp.json();
}

export async function criarReserva(dados) {
  const resp = await fetch(`${API_URL}/reservas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  });
  if (!resp.ok) throw new Error('Falha ao cadastrar reserva.');
  return resp.json();
}

export async function deletarReserva(id) {
  const resp = await fetch(`${API_URL}/reservas/${id}`, { method: 'DELETE' });
  if (!resp.ok) throw new Error('Falha ao cancelar reserva.');
  return true;
}