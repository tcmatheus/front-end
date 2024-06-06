import DestaquesLista from "../components/Dashboard/Destaques/DestaquesLista";

import '../styles/produtosPage.css';

export default function ProdutosPage() {
    return(
        <div className="produtosContainer">
            <h1>Produtos em Destaque</h1>
            <DestaquesLista/>
        </div>
    )
}