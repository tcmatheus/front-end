import { Link } from "react-router-dom";
import Card from "./card";
import { Button } from "primereact/button";
import DestaquesLista from "./Destaques/DestaquesLista";

import SalesData from "./SalesDataComponent/salesData";
import SalesProducts from "./SalesProductsComponent/salesProducts.jsx";

import "../../styles/Dashboard/dashboardPage.css";
import "../../styles/Dashboard/card.css";
import "../../styles/Dashboard/Destaques/destaques.css";

import "../../styles/Dashboard/dashboardVendedor.css";

export default function DashboardVendedor() {
  return (
    <div className="dashboardlayout">
      <div className="dashboardContent">
        <div className="firstGroupContainer">
          {/* Total Vendas */}
          <div className="salesGroup">
            <SalesData
              totalVendasHoje={682.5}
              vendasHoje={1}
              vendasOntem={2}
              vendidos={449}
              recebidos={426}
              tempoResposta={"33m"}
              ultimaAtualizacao={"3h 8m"}
            />
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
        <div className="container_banner">
          <img
            className="banner"
            src="https://www.picsum.photos/2000/400"
            alt="Banner"
          />
        </div>
        <div className="secondGroupContainer">
          <DestaquesLista />
        </div>
      </div>
    </div>
    // <div className="dashboardlayout">
    //   <div className="dashboardContent">
    //     <div className="firstGroupContainer">
    //       {/* <Card
    //         texto={"Total de Vendas Hoje"}
    //         paragrafo={"do dia 28 Maio 2024, 09:41 PM"}
    //         tipo={"third"}
    //         hasChart={true}
    //       /> */}
    //       <div>
    //         {/* <div className="cardGroup">
    //           <Card
    //             texto={"Vendas esse Mês"}
    //             valor={"R$1.000,00"}
    //             image={"./assets/icons/Graph.png"}
    //           />
    //           <Card
    //             texto={"Ativos"}
    //             valor={"R$1.000,00"}
    //             tipo={"secondary"}
    //             image={"./assets/icons/Chart.png"}
    //           />
    //           <Card
    //             texto={"Clientes"}
    //             valor={"R$1.000,00"}
    //             image={"./assets/icons/Clients.png"}
    //           />
    //           <Card
    //             texto={"Comissões"}
    //             valor={"R$1.000,00"}
    //             image={"./assets/icons/Icon.png"}
    //           />
    //           <div className="cardGroup">
    //             <Card
    //               texto={"Chamados"}
    //               paragrafo={"Mais detalhes"}
    //               tipo={"forth"}
    //               tagUm={"Alta"}
    //               tagDois={"Media"}
    //             />
    //           </div>
    //         </div> */}
    //       </div>
    //     </div>
    //     <div className="container_banner">
    //       <img className="banner" src="https://www.picsum.photos/2000/400" />
    //     </div>

    //     <div className="destaque__container">
    //       <h1 className="destaquesTitle">Produtos em destaque</h1>
    //       <Link to={"produtos"}>
    //         <Button label="Ver Mais Produtos" />
    //       </Link>
    //     </div>
    //     <div className="destaquesContainer">
    //       <DestaquesLista />
    //     </div>
    //   </div>
    // </div>
  );
}
