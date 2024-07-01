import { auth } from "../../../firebase-config";

export const registerUser = async (email, password) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    console.log("Usuário criado:", userCredential.user);
    return userCredential;
  } catch (error) {
    console.error("Erro na criação do usuário:", error.message);
  }
};
