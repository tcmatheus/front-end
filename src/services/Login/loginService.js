import firebase from "../../firebase-config"

export const loginUser = async (email, password) => {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log("Login bem-sucedido:", userCredential.user);
  } catch (error) {
    console.error("Erro no login:", error.message);
  }
};
