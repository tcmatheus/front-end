import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from "primereact/password";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "../../styles/Login/loginForm.css";
import "../../styles/EscolhaUsuario/escolhaUsuario.css";
import { loginAnonymously, loginUser } from "./Services/loginService";
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

  const handleLoginAnonymously = () => {
    loginAnonymously()
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Erro ao logar anonimamente:", error);
        setError("Erro ao tentar logar anonimamente. Por favor, tente novamente.");  
      });
  }

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
                toggleMask={true}
                inputClassName="inputField"
                promptLabel="Digite a senha"
                feedback={false}
              />
              <label className="labelField" htmlFor="senha">
                Senha
              </label>
            </FloatLabel>
            <div className="auxiliarButtons">
              <RegisterUser />
              <ForgotPassword/>
            </div>
            <Button
              className="loginButton"
              onClick={() => handleClick()}
              label="ENTRAR"
            />
            <button
            className="anonimoButton"
             onClick={() => handleLoginAnonymously()}>Entrar Vendedor Anonimo</button>
      
          </div>
        </div>
      </div>
    </div>
  );
}
