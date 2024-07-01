import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth"; // Exemplo de hook de autenticação

export const AuthWrapper = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Carregando...</div>; // Ou algum componente de loading
  }

  if (!user) {
    navigate("/", { replace: true });
    return null;
  }

  return <Outlet />; // Renderiza os componentes filhos se estiver tudo ok
};
