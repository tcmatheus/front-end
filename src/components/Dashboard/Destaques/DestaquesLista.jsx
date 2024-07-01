import React, { useEffect, useState } from "react";
import DestaqueProduto from "./DestaqueProduto";
import ModalProduto from "../../CadastrarProduto/modalProduto";
import { getAllProducts } from "../../CadastrarProduto/Services/produtosService";

export default function DestaquesLista() {
  const [produtos, setProdutos] = useState([]);
  const [selectedProduto, setSelectedProduto] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getProdutos = async () => {
    try {
      const response = await getAllProducts();
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao obter produtos:", error);
    }
  };

  useEffect(() => {
    getProdutos();
  }, []);

  const handleProdutoClick = (produto) => {
    setSelectedProduto(produto);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedProduto(null);
  };

  return (
    <div className="destaquesConjunto">
      <div className="scrollContainer">
        {produtos.map((produto) => (
          <div key={produto.id} onClick={() => handleProdutoClick(produto)}>
            <DestaqueProduto produto={produto} />
          </div>
        ))}
      </div>
      {isModalVisible && (
        <ModalProduto
        isVisible={isModalVisible} 
          onClose={handleCloseModal}
          produto={selectedProduto}
        />
      )}
    </div>
  );
}
