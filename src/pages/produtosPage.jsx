import { Button } from "primereact/button";
import DestaquesLista from "../components/Dashboard/Destaques/DestaquesLista";

import "../styles/produtosPage.css";
import ModalProduto from "../components/ModalProduto";
import { useState } from "react";

export default function ProdutosPage() {
  const userType = localStorage.getItem("userType");

  const [isVisible, setIsVisible] = useState(false);

return (
    <div className="produtosContainer">
        <h1>Produtos em Destaque</h1>
        {userType === "Vendedor" && <DestaquesLista />}
        {userType === "Fornecedor" && (
            <>
                <Button
                    onClick={() => setIsVisible(!isVisible)}
                    label="Cadastrar Produto"
                />
                {isVisible === true && <ModalProduto isVisible={isVisible} />}
            </>
        )}
    </div>
);
}
