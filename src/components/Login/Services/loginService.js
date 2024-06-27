import { auth } from '../../../firebase-config';

export const loginUser = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    console.log("Login bem-sucedido: ", userCredential.user);
  } catch (error) {
    console.error("Erro no login:", error.message);
    throw error;
  }
};

export const loginAnonymously = async () => {
  try {
    const userCredential = await auth.signInAnonymously(auth);
    console.log("Usuário logado anonimamente:", userCredential.user);
    alert("Você está logado anonimamente!");

  } catch (error) {
    console.error("Erro ao logar anonimamente:", error);
    alert("Erro ao tentar logar anonimamente. Por favor, tente novamente.");
  }
};

export const logoutUser = () => {
  return auth.signOut();
};