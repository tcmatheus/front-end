import { InputText } from 'primereact/inputtext';
import { Button,  } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';
import { Password } from 'primereact/password';

import { useState } from 'react';

import { Link } from "react-router-dom";
import '../../styles/Login/loginForm.css';

export default function FormLogin() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleClick = () => {
    console.log(email, senha);
  }

  return (
    <div className='loginFields'>
      <FloatLabel>
        <InputText className='inputField' id='email' type="email" onChange={(e) => setEmail(e.target.value)}  />
        <label className='labelField' htmlFor="email">E-mail</label>
      </FloatLabel>
      <FloatLabel>
        <Password className='inputField' value={senha} id="senha" onChange={(e) => setSenha(e.target.value)} toggleMask inputClassName='inputField' promptLabel="Digite a senha" weakLabel="Fraca" mediumLabel="Média" strongLabel="Forte"/>
        <label className='labelField' htmlFor="senha">Senha</label>
      </FloatLabel>
      <Link to={"/dashboard"}><Button className='loginButton' onClick={() => handleClick()} label='ENTRAR'/></Link>
      <p className='forgotPassword'>Esqueci a senha</p>
    </div>
  );
}
