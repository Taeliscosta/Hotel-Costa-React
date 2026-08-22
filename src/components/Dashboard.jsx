import { Link } from 'react-router';

function Dashboard() {
  return (
    <div className="tela-conteudo">
      <header className="tela-header">
        <div>
          <h2>Dashboard</h2>
          <p>Visão geral do Hotel Costa</p>
        </div>
        <button className="btn-primario">+ Nova Reserva</button>
      </header>

      <div className="grid-dashboard">
        <div className="card-dash">
          <div className="icone-dash clientes">👥</div>
          <div>
            <p>Clientes</p>
            <h3>3</h3>
            <span>cadastrados</span>
          </div>
        </div>

        <div className="card-dash">
          <div className="icone-dash quartos">🏠</div>
          <div>
            <p>Total de Quartos</p>
            <h3>6</h3>
            <span>no hotel</span>
          </div>
        </div>

        <div className="card-dash">
          <div className="icone-dash disponiveis">✅</div>
          <div>
            <p>Disponíveis</p>
            <h3>4</h3>
            <span>quartos livres</span>
          </div>
        </div>

        <div className="card-dash">
          <div className="icone-dash reservas">📅</div>
          <div>
            <p>Reservas Ativas</p>
            <h3>2</h3>
            <span>em andamento</span>
          </div>
        </div>
      </div>

      <h3 className="titulo-secao">Acesso Rápido</h3>
      <div className="grid-acesso-rapido">
        <Link to="/clientes" className="card-acesso">
          <div className="icone-dash clientes">👥</div>
          <div>
            <h4>Clientes</h4>
            <p>Gerenciar cadastro de clientes</p>
          </div>
        </Link>

        <Link to="/quartos" className="card-acesso">
          <div className="icone-dash quartos">🏠</div>
          <div>
            <h4>Quartos</h4>
            <p>Ver disponibilidade e detalhes</p>
          </div>
        </Link>

        <Link to="/reservas" className="card-acesso">
          <div className="icone-dash reservas">📅</div>
          <div>
            <h4>Reservas</h4>
            <p>Consultar e gerenciar reservas</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;