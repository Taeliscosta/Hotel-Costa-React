import { Link, useLocation } from 'react-router';

function LayoutPainel({ usuarioLogado, onSair, children }) {
  const location = useLocation();

  // Função simples para saber se o menu está ativo e pintar de azul
  const isAtivo = (caminho) => location.pathname === caminho ? 'menu-ativo' : '';

  return (
    <div className="layout-container">
      {/* BARRA LATERAL ESCURA */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>🏨 Hotel Costa</h2>
          <p>Gestão Hoteleira</p>
        </div>
        
        <nav className="sidebar-nav">
          <Link to="/dashboard" className={isAtivo('/dashboard')}>🏠 Dashboard</Link>
          <Link to="/clientes" className={isAtivo('/clientes')}>👥 Clientes</Link>
          <Link to="/quartos" className={isAtivo('/quartos')}>🛌 Quartos</Link>
          <Link to="/reservas" className={isAtivo('/reservas')}>📅 Reservas</Link>
        </nav>

        <div className="sidebar-footer">
          <div className="usuario-info">
            <span className="iniciais">HC</span>
            <div>
              <strong>{usuarioLogado?.nome || 'Administrador'}</strong>
              <p>{usuarioLogado?.email || 'admin@hotelcosta.com'}</p>
            </div>
          </div>
          <button onClick={onSair} className="btn-sair">Sair</button>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL (Telas dinâmicas) */}
      <main className="conteudo-principal">
        {children}
      </main>
    </div>
  );
}

export default LayoutPainel;