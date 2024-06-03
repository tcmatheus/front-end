import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import DashboardPage from "./pages/dashboard";
import EscolhaUsuario from "./pages/escolhaUsuario";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EscolhaUsuario/>} />
        <Route path="/loginFornecedor" element={<LoginPage tipoLogin={"Fornecedor"} />} />
        <Route path="/loginVendedor" element={<LoginPage tipoLogin={"Vendedor"} />} />
        <Route path="/dashboard" element={<DashboardPage/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
