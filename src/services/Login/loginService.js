import { auth } from '../../firebase-config';

export const loginUser = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    console.log("Login bem-sucedido:", userCredential.user);
  } catch (error) {
    console.error("Erro no login:", error.message);
    throw error;  // Certifique-se de propagar ou tratar o erro apropriadamente
  }
};

export const logoutUser = () => {
  return auth.signOut();
};
