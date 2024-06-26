import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { registerUser } from "../../services/Login/registerService";
import { loginUser } from "../../services/Login/loginService";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
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
        email: email
      })

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
      setError("Erro ao registrar. Por favor, verifique os detalhes e tente novamente.");
    }
  };

  return (
    <div>
      <Button
        label="Registre-se"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
      draggable={false}
        header="Registre-se!"
        visible={visible}
        style={{ width: "70vw", height: "60vh" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <FloatLabel>
          <InputText
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </FloatLabel>
        <FloatLabel>
          <InputText
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Senha</label>
        </FloatLabel>
        <Button
          label="Registrar!"
          icon="pi pi-verified"
          onClick={() => handleRegister()}
        ></Button>
        <Dropdown
          value={selectedUserType}
          onChange={(e) => setSelectedUserType(e.value)}
          options={userType}
          optionLabel="name"
          placeholder="Selecione o tipo de usuário"
          className="w-full md:w-14rem"
          checkmark={true}
          highlightOnSelect={false}
        />
      </Dialog>
    </div>
  );
}
