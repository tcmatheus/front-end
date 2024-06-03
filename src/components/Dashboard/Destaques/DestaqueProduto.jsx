import '../../../styles/Dashboard/Destaques/destaques.css'

export default function DestaqueProduto(produto) {
  return (
    <div className="destaquesConjunto">
      <img src={produto.image}></img>
      <p>Preço de Custo: ${produto.precoCusto}</p>
      <p>Preço de Venda: ${produto.precoVenda}</p>
    </div>
  );
}
