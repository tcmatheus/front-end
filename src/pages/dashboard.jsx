import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

import "../styles/Dashboard/dashboardPage.css";
import "../styles/Dashboard/card.css";
import "../styles/Dashboard/Destaques/destaques.css";

import DashboardVendedor from "../components/Dashboard/dashboardVendedor";
import DashboardFornecedor from "../components/Dashboard/dashboardFornecedor";
import { useAuth } from '../hooks/useAuth'; // Importando o hook useAuth

export default function DashboardPage() {
  const [userType, setUserType] = useState(null);
  const { user, isLoading } = useAuth(); // Usando o hook para obter o usuário e o estado de loading

  useEffect(() => {
    const fetchUserType = async () => {
      if (user) {
        const db = getFirestore();
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setUserType(userDoc.data().userType);
        } else {
          console.log("No such document!");
        }
      }
    };

    if (!isLoading) { // Garantindo que o usuário esteja carregado antes de buscar o userType
      fetchUserType();
    }
  }, [user, isLoading]); // Dependências do useEffect

  if (isLoading) {
    return <div>Carregando...</div>; // Mostrando um loading enquanto o usuário está sendo carregado
  }

  return (
    <div className="dashboardContainer">
      {userType === "Vendedor" && <DashboardVendedor />}
      {userType === "Fornecedor" && <DashboardFornecedor />}
    </div>
  );
}
