import ChamadosPerguntas from "./chamadosPerguntas";

import "../../../styles/Dashboard/ChamadosPerguntas/chamadosPerguntas.css";

export default function ChamadosPerguntasSection() {
  return (
    <div className="chamadosPerguntasSection__container">
      <h2>Chamados e Perguntas</h2>
      <div className="chamadosPerguntasSection__container--chamados">
        <ChamadosPerguntas tag={"Atraso"} />
        <ChamadosPerguntas tag={"Atencao"} />
        <ChamadosPerguntas tag={"Atendido"} />
        <ChamadosPerguntas tag={"Atendido"} />
      </div>
    </div>
  );
}
