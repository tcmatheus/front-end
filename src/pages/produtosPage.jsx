import DestaquesLista from "../components/Dashboard/Destaques/DestaquesLista";

import "../styles/produtosPage.css";
import { useState } from "react";
import CadastrarProduto from "../components/CadastrarProduto/cadastrarProduto";

export default function ProdutosPage() {
  const userType = localStorage.getItem("userType");

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="produtosContainer">
      {userType === "Vendedor" && (
        <>
          <h1>Produtos em Destaque</h1> 
          <DestaquesLista />
        </>
      )}
      {userType === "Fornecedor" && (
        <>
          {/* <Button
            onClick={() => setIsVisible(!isVisible)}
            label="Cadastrar Produto"
          /> */}
          <CadastrarProduto/>
          <div>
            <h1>Produtos Cadastrados</h1>
            <DestaquesLista />
          </div>
        </>
      )}
    </div>
  );
}
