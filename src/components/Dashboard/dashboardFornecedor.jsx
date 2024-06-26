import React from "react";
import Card from "./card";
import "../../styles/Dashboard/dashboardPage.css";
import "../../styles/Dashboard/card.css";
import Ranking from "./Ranking/ranking.jsx";
import ChamadosPerguntasSection from "./ChamadosPerguntas/chamadosPerguntasSection.jsx";

export default function DashboardFornecedor() {
  return (
    <div className="dashboardlayout">
      <div className="dashboardContent">
        <div className="cardGroupContainer">
          <Card
            texto={"Total de Vendas Hoje"}
            paragrafo={"do dia 28 Maio 2024, 09:41 PM"}
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
        <div className="inferior__container">
          <Ranking />
          <ChamadosPerguntasSection />
        </div>
      </div>
    </div>
  );
}
