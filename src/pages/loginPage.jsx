import "../styles/Login/loginPage.css";

import GlassLogin from "../components/Login/glassLogin";

export default function LoginPage({ tipoLogin }) {
  return (
    <section className={`backgroundPage ${tipoLogin === 'Vendedor' ? 'backgroundVend' : 'backgroundForn'}`}>
      <GlassLogin tipoLogin={tipoLogin}/>
    </section>
  );
}
