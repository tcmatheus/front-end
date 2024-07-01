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
    const response = await axios.post("http://localhost:4004/api/produtos", produto);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter todos os produtos:", error);
    throw error;
  }
};

export { getAllProducts, criarProduto };
