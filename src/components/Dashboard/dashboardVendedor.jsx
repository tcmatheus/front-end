import { Link } from "react-router-dom";
import Card from "./card";
import { Button } from "primereact/button";
import DestaquesLista from "./Destaques/DestaquesLista";

import SalesData from "./SalesDataComponent/salesData";
import SalesProducts from "./SalesProductsComponent/salesProducts.jsx";
import { Carousel } from "primereact/carousel";

import "../../styles/Dashboard/dashboardPage.css";
import "../../styles/Dashboard/card.css";
import "../../styles/Dashboard/Destaques/destaques.css";
import "../../styles/Dashboard/dashboardVendedor.css";

export default function DashboardVendedor() {
  const bannerImages = [
    "https://files.oaiusercontent.com/file-yAfT8AUzcTYREw2vDTHlbw2j?se=2024-07-16T22%3A02%3A40Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dbdeff95b-81da-4246-93f4-8fb4590b0a06.webp&sig=%2B/B8IvPT3EzYoMiKtmbb0TCyRFz9kP2NDA4i73V12KE%3D",
    "https://files.oaiusercontent.com/file-TVgVpH6j7ur6zvtWzn46ilpJ?se=2024-07-16T22%3A03%3A35Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc6db1f9d-275c-47ec-a16c-72e809dc9a15.webp&sig=CrRNQZU8Qf1woXNSUsUbOAMM9vFWgC8i54WC/Sl2lE8%3D",
    "https://files.oaiusercontent.com/file-1nbW22NVz6SE4FgZ0D6kujBm?se=2024-07-16T22%3A04%3A06Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Daa9ba6e1-0c8d-4c6b-954a-c6cc6ebb4f4a.webp&sig=oBmpp9QX3yIAxeRB9smOc88uysDF3mi1p5c2mc8ZWDU%3D"
  ];

  const bannerTemplate = (image) => {
    return <img className="banner" src={image} alt="Banner" />;
  };

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
          <Carousel 
            value={bannerImages} 
            itemTemplate={bannerTemplate} 
            numVisible={1} 
            numScroll={1} 
            autoplayInterval={3000} // Mudança de imagem a cada 2 segundos
            className="custom-carousel"
            circular
            swipeable
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
