import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import {Message} from 'primereact/message'

export const resetPassword = async (email) => {
  const auth = getAuth();
  try {
    await sendPasswordResetEmail(auth, email);
    return <Message severity='success' text="E-mail de redefinição de senha enviado! Verifique sua caixa de entrada."/>
  } catch (error) {
    console.error("Erro ao enviar e-mail de redefinição de senha:", error);
    return <Message severity='error' text="Erro ao enviar e-mail de redefinição de senha. Por favor, tente novamente."/>
  }
};
