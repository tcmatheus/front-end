import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/Login/registerUser.css";
import { resetPassword } from "./Services/resetPassword";

export default function ForgotPassword() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
        setMessage(await resetPassword(email));
    } catch (error) {}
  };

  return (
    <div>
      <Button
        label="Esqueceu a senha?"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        draggable={false}
        className="nameregistrar"
        header="Redefinição de Senha"
        visible={visible}
        style={{ width: "44vw", height: "60vh" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <FloatLabel className="emailbox">
          <p>
            Informe o email e enviaremos um link de recuperação de senha para
            você!
          </p>
          <InputText
            unstyled={true}
            className="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </FloatLabel>
        <Button
          unstyled={true}
          className="registrar"
          label="Enviar Link de Verificação"
          onClick={() => handleRegister()}
          type="button"
          ></Button>
          {message}
      </Dialog>
    </div>
  );
}
