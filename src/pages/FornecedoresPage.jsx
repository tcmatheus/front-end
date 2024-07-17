import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { getAuth, updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider, sendEmailVerification } from 'firebase/auth';
import '../styles/FornecedoresPage.css';

Modal.setAppElement('#root');

const FornecedoresPage = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [selectedFornecedor, setSelectedFornecedor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  useEffect(() => {
    const fetchFornecedores = async () => {
      const db = getFirestore();
      const fornecedoresSnapshot = await getDocs(collection(db, 'users'));
      const fornecedoresList = fornecedoresSnapshot.docs
        .filter(doc => doc.data().userType === 'Fornecedor')
        .map(doc => ({ id: doc.id, ...doc.data() }));
      setFornecedores(fornecedoresList);
    };
    fetchFornecedores();
  }, []);

  const openModal = (fornecedor) => {
    setSelectedFornecedor(fornecedor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedFornecedor(null);
    setIsModalOpen(false);
  };

  const reauthenticate = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(user.email, currentPassword);
    try {
      await reauthenticateWithCredential(user, credential);
      return true;
    } catch (error) {
      console.error("Reauthentication failed: ", error.message);
      return false;
    }
  };

  const handleUpdateEmail = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const reauthenticated = await reauthenticate();
    if (reauthenticated && user) {
      try {
        await updateEmail(user, newEmail);
        await sendEmailVerification(user);
        alert("Email atualizado com sucesso! Por favor, verifique seu novo email.");
      } catch (error) {
        console.error("Erro ao atualizar email: ", error.message);
        alert("Erro ao atualizar email: " + error.message);
      }
    }
  };

  const handleUpdatePassword = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const reauthenticated = await reauthenticate();
    if (reauthenticated && user) {
      try {
        await updatePassword(user, newPassword);
        alert("Senha atualizada com sucesso!");
      } catch (error) {
        console.error("Erro ao atualizar senha: ", error.message);
        alert("Erro ao atualizar senha: " + error.message);
      }
    }
  };

  const handleUpdateFirestore = async () => {
    const db = getFirestore();
    if (newEmail) {
      await updateDoc(doc(db, 'users', selectedFornecedor.id), { email: newEmail });
      setSelectedFornecedor({ ...selectedFornecedor, email: newEmail });
    }
    alert("Dados atualizados no Firestore com sucesso!");
  };

  return (
    <div className="fornecedoresContainer">
      <h1>Fornecedores</h1>
      <div className="fornecedoresList">
        {fornecedores.map((fornecedor) => (
          <div className="fornecedorItem" key={fornecedor.id}>
            <h3>{fornecedor.email}</h3>
            <div className="fornecedorDetails">
              <span>Vendas no mês</span>
              <button onClick={() => openModal(fornecedor)}>Configuração de Usuário</button>
              <button onClick={() => openModal(fornecedor)}>Visão geral de Fornecedor</button>
            </div>
          </div>
        ))}
      </div>

      {selectedFornecedor && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Configuração de Usuário"
          className="modal"
          overlayClassName="modalOverlay"
        >
          <h2>Configuração de Usuário</h2>
          <p>Email: {selectedFornecedor.email}</p>
          <input
            type="email"
            placeholder="Novo Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha Atual"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Nova Senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <div className="modalButtons">
            <button onClick={handleUpdateEmail}>Atualizar Email</button>
            <button onClick={handleUpdatePassword}>Atualizar Senha</button>
            <button onClick={handleUpdateFirestore}>Salvar no Firestore</button>
            <button onClick={closeModal}>Fechar</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FornecedoresPage;
