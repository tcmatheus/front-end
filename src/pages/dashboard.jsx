import SidebarComponent from "../components/Dashboard/SidebarComponent";
import Card from "../components/Dashboard/card";
import Navbar from "../components/Dashboard/navbar";
import DestaquesLista from "../components/Dashboard/Destaques/DestaquesLista";

import "../styles/Dashboard/dashboardPage.css";
import "../styles/Dashboard/card.css";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <div className="dashboardContainer">
      <div className="dashboardlayout">
        <div className="dashboardContent">
          <div className="cardGroupContainer">
            <Card
              texto={"Total de Vendas Hoje"}
              paragrafo={"do dia 28 Máio 2024, 09:41 PM"}
              tipo={"third"}
            />
            <div>
              <div className="cardGroup">
                <Card
                  texto={"Vendas esse Mês"}
                  valor={"R$1.000,00"}
                  image={"./assets/icons/Graph.png"}
                />
                <Card
                  texto={"Ativos"}
                  valor={"R$1.000,00"}
                  tipo={"secondary"}
                  image={"./assets/icons/Chart.png"}
                />
                <Card
                  texto={"Clientes"}
                  valor={"R$1.000,00"}
                  image={"./assets/icons/Clients.png"}
                />
                <Card
                  texto={"Comissões"}
                  valor={"R$1.000,00"}
                  image={"./assets/icons/Icon.png"}
                />
                <div className="cardGroup">
                  <Card
                    texto={"Chamados"}
                    paragrafo={"Mais detalhes"}
                    tipo={"forth"}
                    tagUm={"Alta"}
                    tagDois={"Media"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container_banner">
            <img
              class="banner"
              src="https://www.picsum.photos/2000/400"
            />
          </div>

          <div className="destaque__container">
              <h1 className="destaquesTitle">Produtos em destaque</h1>
            <Link to={'produtos'} >
              <Button label="Ver Mais Produtos"/>
            </Link>
          </div>

          <DestaquesLista />
        </div>
      </div>
    </div>
  );
}
