import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {AuthWrapper} from "./components/Authentification/Components/AuthWrapper";
import PedidosPage from "./pages/pedidosPage";
import DashboardLayout from "./layout/dashboardLayout";
import DashboardPage from "./pages/dashboard";
import ProdutosPage from "./pages/produtosPage";
import IntegracaoPage from './pages/IntegracaoPage'; // Importe a nova página
import VendedoresPage from './pages/VendedoresPage';
import AuthTokenPage from "./pages/authTokenPage";
import FormLogin from "./components/Login/formLogin";
import FornecedoresPage from './pages/FornecedoresPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/oauth/callback" element={<AuthTokenPage />} />
        <Route path="/" element={<FormLogin />} />
        <Route element={<AuthWrapper />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="pedidos" element={<PedidosPage />} />
            <Route path="produtos" element={<ProdutosPage />} />
            <Route path="integracao" element={<IntegracaoPage />} /> {/* Use caminho relativo aqui */}
            <Route path="vendedores" element={<VendedoresPage />} />
            <Route path="Fornecedores" element={<FornecedoresPage />} />
            
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
