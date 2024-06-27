import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from "primereact/password";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "../../styles/Login/loginForm.css";
import "../../styles/EscolhaUsuario/escolhaUsuario.css";
import { loginUser } from "../../services/Login/loginService";
import RegisterUser from "./registerUser";
import { Image } from "primereact/image";
import ForgotPassword from "./forgotPassword";

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
    <div className="backgroundPage backgroundEscolhaUser">
      <div className="loginContainer">
        <div className="glassCard">
          <div className="container-loginFields-logo">
            <Image
              src="../assets/logos/logoSouDrop.png"
              alt="Image"
              width="200"
            />
            <h1>Sou Drop - Login</h1>
          </div>
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
                feedback={false}
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
            <ForgotPassword/>
          </div>
        </div>
      </div>
    </div>
  );
}
