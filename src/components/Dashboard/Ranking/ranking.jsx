import ProdutoRank from "./produtoRank";

import "../../../styles/Dashboard/ranking.css";

export default function Ranking() {
  return (
    <section className="ranking__container">
      <h1 className="ranking__container--title">Ranking de Produtos</h1>
      <div className="ranking__container--product">
        <ProdutoRank posicao={1} />
        <ProdutoRank posicao={2} />
        <ProdutoRank posicao={3} />
        <ProdutoRank />
        <ProdutoRank />
      </div>
    </section>
  );
}
