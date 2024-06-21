import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sendCodeToBackend } from "../Services/codeAuthorization";

export default function AuthTokenComponent() {
  const [authCode, setAuthCode] = useState("");
  const [token, setToken] = useState(null);  // Estado para armazenar o token
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");

    setAuthCode(code);

    

    // if (code) {
    //   sendCodeToBackend(code)
    //     .then(response => {
    //       setToken(response.data);  // Supondo que o token esteja na propriedade data.token da resposta
    //      // navigate('/dashboard');  // Redireciona após receber o token
    //     })
    //     .catch((error) => {
    //       console.error("Erro ao enviar código:", error);
    //       // Tratamento de erro, possivelmente redirecionar para uma página de erro
    //     });
    // }
  }, [location, navigate]);

  return (
    <div>
      <h1>Código de Autorização:</h1>
      <h2>{authCode}</h2>
    </div>
  );
}
