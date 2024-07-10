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
  const [cnpj, setCnpj] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const userType = [{ name: "Vendedor" }, { name: "Fornecedor" }];

  const navigate = useNavigate();

  const validateCNPJ = (cnpj) => {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj === '' || cnpj.length !== 14) return false;

    let length = cnpj.length - 2;
    let numbers = cnpj.substring(0, length);
    let digits = cnpj.substring(length);
    let sum = 0;
    let pos = length - 7;

    for (let i = length; i >= 1; i--) {
      sum += numbers.charAt(length - i) * pos--;
      if (pos < 2) pos = 9;
    }

    let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result != digits.charAt(0)) return false;

    length = length + 1;
    numbers = cnpj.substring(0, length);
    sum = 0;
    pos = length - 7;
    for (let i = length; i >= 1; i--) {
      sum += numbers.charAt(length - i) * pos--;
      if (pos < 2) pos = 9;
    }

    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    return result == digits.charAt(1);
  };

  const validateCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf === '' || cpf.length !== 11) return false;

    let sum = 0;
    let remainder;
    for (let i = 1; i <= 9; i++)
      sum += parseInt(cpf[i - 1]) * (11 - i);
    remainder = (sum * 10) % 11;

    if (remainder == 10 || remainder == 11) remainder = 0;
    if (remainder != parseInt(cpf[9])) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++)
      sum += parseInt(cpf[i - 1]) * (12 - i);
    remainder = (sum * 10) % 11;

    if (remainder == 10 || remainder == 11) remainder = 0;
    if (remainder != parseInt(cpf[10])) return false;

    return true;
  };

  const handleRegister = async () => {
    setError(""); // Clear previous errors
    try {
      if (selectedUserType.name === "Fornecedor" && !validateCNPJ(cnpj)) {
        throw new Error("CNPJ inválido.");
      } else if (selectedUserType.name === "Vendedor" && !validateCPF(cpf)) {
        throw new Error("CPF inválido.");
      }

      const userCredential = await registerUser(email, password);
      const userInfo = {
        userType: selectedUserType.name,
        email: email,
        phone: phone,
        ...(selectedUserType.name === "Fornecedor" && { cnpj }),
        ...(selectedUserType.name === "Vendedor" && { cpf }),
      };

      await db.collection("users").doc(userCredential.user.uid).set(userInfo);
      await loginUser(email, password);
      navigate("/dashboard");
      setVisible(false);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError("Mude o email, esse já está cadastrado.");
      } else if (error.message.includes("inválido")) {
        setError("Documento inválido. Por favor, verifique o número e tente novamente.");
      } else {
        setError("Erro ao registrar: " + error.message);
      }
      console.error("Registration Error:", error);
    }
  };

  const additionalFields = selectedUserType.name === "Fornecedor" ?
    <>
      <FloatLabel className="cnpjbox">
        <InputText
        className="cnpjbox"
          id="cnpj"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
        />
        <label htmlFor="cnpj">CNPJ</label>
      </FloatLabel>
      <FloatLabel className="phonebox">
        <InputText
        className="phonebox"
          type="text" 
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="phone">Telefone</label>
      </FloatLabel>
    </> : selectedUserType.name === "Vendedor" ?
    <>
      <FloatLabel className="cpfbox">
        <InputText
          type="text"
          className="cpfbox"
          id="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <label htmlFor="cpf">CPF</label>
      </FloatLabel>
    </> : null;

  return (
    <>
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
        style={{ width: "44vw", height: "53vh"}}
        onHide={() => setVisible(false)}
      >
        {error && <div className="error-message">{error}</div>} {/* Show error message if there is one */}
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
        {additionalFields}
        <Button
          unstyled={true}
          className="registrar"
          label="Registrar!"
          onClick={handleRegister}
        ></Button>
      </Dialog>
    </>
  );
}
