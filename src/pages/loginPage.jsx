import { useState } from "react";

export default function LoginPage({ tipoLogin }) {

    const [tipoUsuario, setTipoUsuario] = useState(tipoLogin);

    function mudarUsuario(){
        setTipoUsuario("Vendedor")
    }


  return (
    <section className={`${tipoUsuario === "Vendedor" ? 'loginVendedor' : 'loginFornecedor'}`}>
        <h1>{tipoUsuario}</h1>
        <button onClick={() => mudarUsuario()}>tu é vendedor?</button>
    </section>
);
}