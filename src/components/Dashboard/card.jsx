import "../../styles/Dashboard/card.css";
import StackedBarChart from "./Charts/stackedBarChart";
import PriorityCard from "./priorityCard";

export default function Card({
  texto,
  tipo,
  valor,
  paragrafo,
  image,
  tagUm,
  tagDois,
  hasChart,
}) {
  return (
    <div
      className={
        tipo === "secondary"
          ? "card-container-secondary"
          : tipo === "third"
          ? "card-container-third"
          : tipo === "forth"
          ? "card-container-forth"
          : "card-container"
      }
    >
      <div style={{ height: "100%" }}>
        <div>
          <p className="cardContentTitle">{texto}</p>
          <h2 className="cardContentValor">{valor}</h2>
          <h3 className="">{paragrafo}</h3>
          {hasChart === true && (
          <div className="chartCard__container">
            <StackedBarChart />
          </div>
        )}
        </div>
        {/* <div className="chartCard__container--infoCards">
          <div className="chartCard__container--infoCards-card">
            <p>Vendidos</p>
            <h2>449</h2>
          </div>
          <div className="chartCard__container--infoCards-card">
            <p>Recebidos</p>
            <h2>426</h2>
          </div>
          <div className="chartCard__container--infoCards-card">
            <p>Tempo de Resposta</p>
            <h2>33m</h2>
          </div>
          <div className="chartCard__container--infoCards-card">
            <p>Última Atualização</p>
            <h2>3h 8m</h2>
          </div>
        </div> */}
      </div>
      <div className="priorityCard__container">
        {tagUm === "Baixa" ||
          (tagDois === "Baixa" && <PriorityCard tags={["Baixa", "Baixa"]} />)}
        {tagUm === "Media" ||
          (tagDois === "Media" && <PriorityCard tags={["Media", "Media"]} />)}
        {tagUm === "Alta" ||
          (tagDois === "Alta" && <PriorityCard tags={["Alta", "Alta"]} />)}
      </div>
      <img src={image} alt="" width={60} />
    </div>
  );
}
