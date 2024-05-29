import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import DashboardPage from "./pages/dashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage tipoLogin={"Fornecedor"} />} />
        <Route path="/dashboard" element={<DashboardPage/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
