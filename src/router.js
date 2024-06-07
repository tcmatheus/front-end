import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthWrapper from "./components/Authentification/AuthWrapper";
import LoginPage from "./pages/loginPage";
import EscolhaUsuario from "./pages/escolhaUsuario";
import PedidosPage from "./pages/pedidosPage";
import DashboardLayout from "./layout/dashboardLayout";
import DashboardPage from "./pages/dashboard";
import ProdutosPage from "./pages/produtosPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EscolhaUsuario />} />
        <Route
          path="/loginFornecedor"
          element={<LoginPage tipoLogin={"Fornecedor"} />}
        />
        <Route
          path="/loginVendedor"
          element={<LoginPage tipoLogin={"Vendedor"} />}
        />
        <Route element={<AuthWrapper />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="pedidos" element={<PedidosPage />} />
            <Route path="produtos" element={<ProdutosPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
