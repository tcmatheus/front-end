import "../styles/EscolhaUsuario/escolhaUsuario.css";

import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default function EscolhaUsuario() {
    return (
    <section className="backgroundPage backgroundEscolhaUser">
      <div className="buttons">
        <Link to={"/loginVendedor"}><Button label="Vendedor"></Button></Link>
        <Link to={"/loginFornecedor"}><Button label="Fornecedor" severity="secondary"></Button></Link>
      </div>
    </section>
  );
}
