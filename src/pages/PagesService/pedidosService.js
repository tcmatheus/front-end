import axios from "axios";

export const getPedidos = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4004/api/pedidos/vendas"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter pedidos:", error);
  }
};

export const getPedidoById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:4004/api/pedidos/vendas/${id}`
    );
    return response.data
  } catch (error) {
    console.error("Erro ao obter pedido:", error);
  }
}
