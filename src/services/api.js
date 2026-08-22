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