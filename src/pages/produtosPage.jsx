import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useAuth } from '../hooks/useAuth'; // Certifique-se que este hook está trazendo o userType

import DestaquesLista from "../components/Dashboard/Destaques/DestaquesLista";
import "../styles/produtosPage.css";
import CadastrarProduto from "../components/CadastrarProduto/cadastrarProduto";

export default function ProdutosPage() {
  const { user, isLoading } = useAuth();
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    if (user && !isLoading) {
      const fetchUserType = async () => {
        const db = getFirestore();
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setUserType(userDoc.data().userType);
        } else {
          console.log("Usuário não encontrado!");
        }
      };

      fetchUserType();
    }
  }, [user, isLoading]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

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
