import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import LayoutPainel from './components/LayoutPainel.jsx';
import Clientes from './components/Clientes.jsx';
import Quartos from './components/Quartos.jsx';
import Reservas from './components/Reservas.jsx';
import './App.css';

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={setUsuarioLogado} />} />

        <Route path="/dashboard" element={
          usuarioLogado ? (
            <LayoutPainel usuarioLogado={usuarioLogado} onSair={() => setUsuarioLogado(null)}>
              <Dashboard />
            </LayoutPainel>
          ) : <Navigate to="/login" />
        } />
        
        <Route path="/clientes" element={
          usuarioLogado ? (
            <LayoutPainel usuarioLogado={usuarioLogado} onSair={() => setUsuarioLogado(null)}>
              <Clientes />
            </LayoutPainel>
          ) : <Navigate to="/login" />
        } />

        <Route path="/quartos" element={
          usuarioLogado ? (
            <LayoutPainel usuarioLogado={usuarioLogado} onSair={() => setUsuarioLogado(null)}>
              <Quartos />
            </LayoutPainel>
          ) : <Navigate to="/login" />
        } />

        <Route path="/reservas" element={
          usuarioLogado ? (
            <LayoutPainel usuarioLogado={usuarioLogado} onSair={() => setUsuarioLogado(null)}>
              <Reservas />
            </LayoutPainel>
          ) : <Navigate to="/login" />
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;