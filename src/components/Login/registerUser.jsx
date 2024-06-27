import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { registerUser } from "./Services/registerService";
import { loginUser } from "./Services/loginService";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import { Password } from "primereact/password";

import "../../styles/Login/registerUser.css";
import { db } from "../../firebase-config";

export default function RegisterUser() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [selectedUserType, setSelectedUserType] = useState("");
  const userType = [{ name: "Vendedor" }, { name: "Fornecedor" }];

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const userCredential = await registerUser(email, password);
      await db.collection("users").doc(userCredential.user.uid).set({
        userType: selectedUserType.name,
        email: email,
      });

      loginUser(email, password)
        .then(() => {
          navigate("/dashboard");
        })
        .catch((error) => {
          console.error("Erro no login:", error.message);
          setError("Falha no login. Verifique seu e-mail e senha.");
        });
      setVisible(false);
    } catch (error) {
      console.error("Erro ao salvar no Firestore:", error);
      setError(
        "Erro ao registrar. Por favor, verifique os detalhes e tente novamente."
      );
    }
  };

  return (
    <div>
      <Button
        label="Registre-se"
        onClick={() => setVisible(true)}
        className="botaoregistrar"
      />
      <Dialog
        draggable={false}
        className="nameregistrar"
        header="Registrar-se"
        visible={visible}
        style={{ width: "44vw", height: "53vh",}}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <FloatLabel className="emailbox">
          <InputText
            type="email"
            unstyled={true}
            className="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </FloatLabel>
        <FloatLabel className="senhabox">
          <Password
            toggleMask={true}
            type="password"
            unstyled={true}
            className="senha"
            id="password"
            feedback={false}
            
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Senha</label>
        </FloatLabel>
        <Dropdown
          className="dropdown"
          value={selectedUserType}
          onChange={(e) => setSelectedUserType(e.value)}
          options={userType}
          optionLabel="name"
          placeholder="Selecione o tipo de usuário"
          checkmark={true}
          highlightOnSelect={false}
        />
        <Button
          unstyled={true}
          className="registrar"
          label="Registrar!"
          onClick={() => handleRegister()}
        ></Button>
      </Dialog>
    </div>
  );
}
