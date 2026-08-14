import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Home from './components/Home';
import { usuariosIniciais } from './data/usuarios';
import './App.css';

function App() {
  const [usuarios, setUsuarios] = useState(usuariosIniciais);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  function cadastrar(novo) {
    const proximoId = Math.max(0, ...usuarios.map((u) => u.id)) + 1;
    setUsuarios([...usuarios, { id: proximoId, ...novo }]);
  }

  return (
    <BrowserRouter>
      <div className="container">
        <h1>Hotel Costa</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/cadastro" element={<Cadastro usuarios={usuarios} onCadastrar={cadastrar} />} />
          <Route path="/login" element={<Login usuarios={usuarios} onLogin={setUsuarioLogado} />} />
          <Route path="/home" element={<Home usuarioLogado={usuarioLogado} usuarios={usuarios} onSair={() => setUsuarioLogado(null)} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;