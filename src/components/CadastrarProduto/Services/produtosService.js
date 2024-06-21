import axios from 'axios';

const getAllProducts = async () => {
    try {
        const response = await axios.get('http://localhost:4004/api/produtos');
        return response.data;
    } catch (error) {
        console.error('Erro ao obter todos os produtos:', error);
        throw error;
    }
};

export default getAllProducts;