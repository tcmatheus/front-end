import FormLogin from "./formLogin";

import '../../styles/Login/glassLogin.css';

import { Image } from "primereact/image";

export default function GlassLogin({ tipoLogin }) {
  return (
    <div className="glassCard">
      <div className="container-loginFields">
        <Image className="container-loginFields-logo" src="../assets/logos/logoSouDrop.png" alt="Image" width="200" />
        <h1>{tipoLogin}</h1>
      </div>
        <FormLogin />
    </div>
  );
}
