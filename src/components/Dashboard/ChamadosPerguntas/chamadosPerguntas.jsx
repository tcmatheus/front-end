import { Tag } from "primereact/tag";

export default function ChamadosPerguntas({tag}) {
  return (
    <>
      <div className="chamadosPerguntas__container">
        <div>
          <img src="https://www.picsum.photos/75/75" alt="" />
        </div>
        <div className="chamadosPerguntas__container--user">
          <h3>User 1</h3>
          <p>Gostaria de saber o prazo de entrega</p>
        </div>
      </div>
        <div className="chamadosPerguntas__container--dataStatus">
          <p>Há 2 dias</p>
          {tag === "Atraso" && <Tag severity="danger" value="Em Atraso"></Tag>}
          {tag === "Atencao" && <Tag severity="warning" value="Atenção"></Tag>}
          {tag === "Atendido" && <Tag severity="success" value="Atendido"></Tag>}
        </div>
      <hr />
    </>
  );
}
