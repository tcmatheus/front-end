import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from "primereact/password";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "../../styles/Login/loginForm.css";
import { loginUser } from "../../services/Login/loginService";
import RegisterUser from "./registerUser";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    loginUser(email, senha)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Erro no login:", error.message);
        setError("Falha no login. Verifique seu e-mail e senha.");
      });
  };

  return (
    <div className="loginFields">
      {error && <p className="error">{error}</p>}
      <FloatLabel>
        <InputText
          className="inputField"
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="labelField" htmlFor="email">
          E-mail
        </label>
      </FloatLabel>
      <FloatLabel>
        <Password
          className="inputField"
          value={senha}
          id="senha"
          onChange={(e) => setSenha(e.target.value)}
          toggleMask
          inputClassName="inputField"
          promptLabel="Digite a senha"
          weakLabel="Fraca"
          mediumLabel="Média"
          strongLabel="Forte"
        />
        <label className="labelField" htmlFor="senha">
          Senha
        </label>
      </FloatLabel>
      <Button
        className="loginButton"
        onClick={() => handleClick()}
        label="ENTRAR"
      />
      <RegisterUser />

      <p className="forgotPassword">Esqueci a senha</p>
    </div>
  );
}
