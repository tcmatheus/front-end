import SidebarComponent from "../components/Dashboard/SidebarComponent";
import Card from "../components/Dashboard/card";
import Navbar from "../components/Dashboard/navbar";
import DestaquesLista from "../components/Dashboard/Destaques/DestaquesLista";

import "../styles/Dashboard/dashboardPage.css";
import "../styles/Dashboard/card.css";

export default function DashboardPage() {
  return (
    <div className="dashboardContainer">
      <div className="dashboardlayout">
        <SidebarComponent/>
        <div className="dashboardContent">
          <Navbar />
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
                  image={"https://www.picsum.photos/60"}
                />
                <Card
                  texto={"Ativos"}
                  valor={"R$1.000,00"}
                  tipo={"secondary"}
                  image={"https://www.picsum.photos/60"}
                />
                <Card
                  texto={"Clientes"}
                  valor={"R$1.000,00"}
                  image={"https://www.picsum.photos/60"}
                />
                <Card
                  texto={"Comissões"}
                  valor={"R$1.000,00"}
                  image={"https://www.picsum.photos/60"}
                />
                <div className="cardGroup">
                  <Card
                    texto={"Chamados"}
                    paragrafo={"Mais detalhes"}
                    tipo={"forth"}
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

          <h1 className="destaquesTitle">Produtos em destaque</h1>
          <DestaquesLista />
        </div>
      </div>
    </div>
  );
}
