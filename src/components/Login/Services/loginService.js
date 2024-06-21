export const login = (tipoUsuario) => {
  // Essa função seja chamada após validar as credenciais do usuário
  const userType = tipoUsuario; // Isso viria como resultado da autenticação

  // Armazena o tipo de usuário no localStorage
  localStorage.setItem("userType", userType);
};

export const logout = (label) => {
  if (label === "Sair") {
    localStorage.setItem("userType", "");
  }
};
