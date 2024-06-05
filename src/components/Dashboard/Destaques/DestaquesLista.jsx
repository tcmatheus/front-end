import  DestaqueProduto from "../Destaques/DestaqueProduto";

export default function DestaquesLista() {

const produtos = [
    { imagem: "https://www.picsum.photos/1000", precoCusto: 10, precoVenda: 20 },
    { imagem: "https://www.picsum.photos/1000", precoCusto: 15, precoVenda: 25 },
    { imagem: "https://www.picsum.photos/1000", precoCusto: 15, precoVenda: 25 },
    { imagem: "https://www.picsum.photos/1000", precoCusto: 15, precoVenda: 25 },
    { imagem: "https://www.picsum.photos/1000", precoCusto: 15, precoVenda: 25 },
    { imagem: "https://www.picsum.photos/1000", precoCusto: 15, precoVenda: 25 },
    { imagem: "https://www.picsum.photos/1000", precoCusto: 15, precoVenda: 25 },
    { imagem: "https://www.picsum.photos/1000", precoCusto: 15, precoVenda: 25 },
    { imagem: "https://www.picsum.photos/1000", precoCusto: 15, precoVenda: 25 },
    { imagem: "https://www.picsum.photos/1000", precoCusto: 15, precoVenda: 25 },
    { imagem: "https://www.picsum.photos/1000", precoCusto: 12, precoVenda: 22 },
    { imagem: "https://www.picsum.photos/1000", precoCusto: 12, precoVenda: 22 },
    { imagem: "https://www.picsum.photos/1000", precoCusto: 12, precoVenda: 22 },
    { imagem: "https://www.picsum.photos/1000", precoCusto: 12, precoVenda: 22 },
    { imagem: "https://www.picsum.photos/1000", precoCusto: 10002, precoVenda: 11122 },
];

  return (
    <div className="destaquesConjunto">
      <div className="scrollContainer">
        {produtos.map((produto) => {
              return <DestaqueProduto produto={produto}/>
        })}
      </div>
    </div>
  );
}