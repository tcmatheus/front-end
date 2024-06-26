import "../../styles/Dashboard/card.css";
import StackedBarChart from "./Charts/stackedBarChart";
import PriorityCard from "./priorityCard";

export default function Card({
  texto,
  valor,
  hasChart,
  tipo,
  image,
  background,
  colorTitle,
  colorValue,
}) {
  return (
    <div
      className={`card-container ${tipo === "commun" ? "commun" : "image"}`}
      style={{ background }}
    >
      {tipo === "image" ? (
        <>
          <img src={image} alt="" width={150} />
          <img src={"./assets/icons/Bell.png"} alt="" width={20} />
        </>
      ) : (
        <div className="card-content__text">
          <p style={{ color: colorTitle }}>{texto}</p>
          <h2 style={{ color: colorValue }}>{valor}</h2>
        </div>
      )}

      {hasChart === true && tipo !== "image" && (
        <div className="chart-card-container">
          <StackedBarChart />
        </div>
      )}

      {tipo !== "image" && (
        <div>
          <img src={image} alt="" width={60} />
        </div>
      )}
    </div>
  );
}
