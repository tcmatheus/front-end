import firebase from "../../firebase-config"

const registerUser = async (email, password) => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log("Usuário criado:", userCredential.user);
    } catch (error) {
      console.error("Erro na criação do usuário:", error.message);
    }
  };