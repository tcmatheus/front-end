import React from "react";
import "../../../styles/Dashboard/salesData.css";

export default function SalesData({
  totalVendasHoje,
  vendidos,
  recebidos,
  tempoResposta,
  ultimaAtualizacao,
}) {
  const today = new Date();
  const formattedDate = `${today.getDate()} ${today.toLocaleString("default", {
    month: "long",
  })} ${today.getFullYear()}, ${today.toLocaleString("default", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;

  return (
    <div className="salesContainer">
      <div className="salesHeader">
        <>
          <h2>Total de Vendas Hoje</h2>
          <p>do dia {formattedDate}</p>
        </>

        <div className="salesValue">
          <p>Total de Vendas</p>
          <h1>${totalVendasHoje}</h1>
        </div>
      </div>

      <div className="salesInfo">
        <div>
          <p>Vendidos</p>
          <h2>{vendidos}</h2>
        </div>
        <div>
          <p>Recebidos</p>
          <h2>{recebidos}</h2>
        </div>
        <div>
          <p>Tempo de Resposta</p>
          <h2>{tempoResposta}</h2>
        </div>
        <div>
          <p>Ultima Atualização</p>
          <h2>{ultimaAtualizacao}</h2>
        </div>
      </div>
    </div>
  );
}
