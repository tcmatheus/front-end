import React from "react";
import Card from "./card";
import SalesData from "./SalesDataComponent/salesData";
import SalesProducts from "./SalesProductsComponent/salesProducts.jsx";
import "../../styles/Dashboard/dashboardPage.css";
import "../../styles/Dashboard/card.css";
import Ranking from "./Ranking/ranking.jsx";
import ChamadosPerguntasSection from "./ChamadosPerguntas/chamadosPerguntasSection.jsx";

export default function DashboardFornecedor() {
  return (
    <div className="dashboardlayout">
      <div className="dashboardContent">
        <div className="cardGroupContainer">
          {/* Total Vendas */}
          <div className="salesGroup">
            <SalesData />
          </div>

          <div className="rightComponents">
            {/* Container Cards */}
            <div className="cardGroup">
              <Card
                tipo={"commun"}
                texto={"Vendas esse Mês"}
                valor={"$682.5"}
                image={"./assets/icons/Charts.png"}
                background={"#FFFFFF"}
              />
              <Card
                tipo={"commun"}
                texto={"Ativos"}
                valor={"$540.50"}
                image={"./assets/icons/Chart.png"}
                background={
                  "linear-gradient(to bottom right, #4caf50, #1e693b)"
                }
                colorTitle={"#E9EDF7"}
                colorValue={"#FFFFFF"}
              />
              <Card
                tipo={"image"}
                image={"./assets/icons/Ml.png"}
                background={"#FED33A"}
              />
              <Card
                tipo={"commun"}
                texto={"Comissões"}
                valor={"$350.40"}
                image={"./assets/icons/Icon.png"}
                background={"#FFFFFF"}
              />
            </div>

            {/* Container Vendas */}
            <SalesProducts />
          </div>
        </div>
        {/* <div className="inferior__container">
          <Ranking />
          <ChamadosPerguntasSection />
        </div> */}
      </div>
    </div>
  );
}
