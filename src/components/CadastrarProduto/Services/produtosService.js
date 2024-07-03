import axios from "axios";

const getAllProducts = async () => {
  try {
    const response = await axios.get("http://localhost:4004/api/produtos");
    return response.data;
  } catch (error) {
    console.error("Erro ao obter todos os produtos:", error);
    throw error;
  }
};

const criarProduto = async (produto) => {
  try {
    const response = await axios.post(
      "http://localhost:4004/api/produtos",
      produto
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao obter todos os produtos:", error);
    throw error;
  }
};

const alterarProduto = async (produtoId, produto) => {
  try {
    console.log(produtoId, produto);
    const response = await axios.put(
      `http://localhost:4004/api/produtos/${produtoId}`,
      produto
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao alterar o produto:", error);
  }
};

const deletarProduto = async (produtoId) => {
  try {
    const situacao = {
      idsProdutos: [produtoId],
      situacao: "E",
    };

    const response = await axios.post(
      `http://localhost:4004/api/produtos/situacoes`,
      situacao
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar o produto:", error);
    throw error;
  }
};

export { getAllProducts, criarProduto, alterarProduto, deletarProduto };
