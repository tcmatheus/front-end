import ChamadosPerguntas from "./chamadosPerguntas";

import "../../../styles/Dashboard/ChamadosPerguntas/chamadosPerguntas.css";

export default function ChamadosPerguntasSection(){
    return(
        <div className="chamadosPerguntasSection__container">
            <h2 className="chamadosPerguntasSection__container--title">Chamados e Perguntas</h2>
            <ChamadosPerguntas tag={"Atraso"}/>
            <ChamadosPerguntas tag={"Atencao"}/>
            <ChamadosPerguntas tag={"Atendido"}/>
            <ChamadosPerguntas tag={"Atendido"}/>   
        </div>
    )
}