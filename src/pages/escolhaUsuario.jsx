import "../styles/EscolhaUsuario/escolhaUsuario.css";
import { login } from "../services/Login/loginService";

import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default function EscolhaUsuario() {

    return (
    <section className="backgroundPage backgroundEscolhaUser">
      <div className="buttons">
        <Link to={"/loginVendedor"}><Button onClick={() => login("Vendedor")} label="Vendedor"></Button></Link>
        <Link to={"/loginFornecedor"}><Button onClick={() => login("Fornecedor")} label="Fornecedor" severity="secondary"></Button></Link>
      </div>
    </section>
  );
}
