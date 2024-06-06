import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function AuthWrapper() {
  const navigate = useNavigate();

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    
    if (!userType) {
      // Se não encontrar o tipo de usuário, redireciona para a página de escolha do tipo de usuário
      navigate("/");
    } else {
      // Se o tipo de usuário for encontrado, redireciona para a dashboard
      navigate("/dashboard");
    }
  }, []);

  return <Outlet />;
}
