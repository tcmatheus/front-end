import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { getAuth, updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider, sendEmailVerification } from 'firebase/auth';
import '../styles/VendedoresPage.css';

Modal.setAppElement('#root');

const VendedoresPage = () => {
  const [vendedores, setVendedores] = useState([]);
  const [selectedVendedor, setSelectedVendedor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  useEffect(() => {
    const fetchVendedores = async () => {
      const db = getFirestore();
      const vendedoresSnapshot = await getDocs(collection(db, 'users'));
      const vendedoresList = vendedoresSnapshot.docs
        .filter(doc => doc.data().userType === 'Vendedor')
        .map(doc => ({ id: doc.id, ...doc.data() }));
      setVendedores(vendedoresList);
    };
    fetchVendedores();
  }, []);

  const openModal = (vendedor) => {
    setSelectedVendedor(vendedor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVendedor(null);
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
      await updateDoc(doc(db, 'users', selectedVendedor.id), { email: newEmail });
      setSelectedVendedor({ ...selectedVendedor, email: newEmail });
    }
    alert("Dados atualizados no Firestore com sucesso!");
  };

  return (
    <div className="vendedoresContainer">
      <h1>Vendedores</h1>
      <div className="vendedoresList">
        {vendedores.map((vendedor) => (
          <div className="vendedorItem" key={vendedor.id}>
            <h3>{vendedor.email}</h3>
            <div className="vendedorDetails">
              <span>Vendas no mês</span>
              <button onClick={() => openModal(vendedor)}>Configuração de Usuário</button>
              <button onClick={() => openModal(vendedor)}>Visão geral de Vendedor</button>
            </div>
          </div>
        ))}
      </div>

      {selectedVendedor && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Configuração de Usuário"
          className="modal"
          overlayClassName="modalOverlay"
        >
          <h2>Configuração de Usuário</h2>
          <p>Email: {selectedVendedor.email}</p>
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

export default VendedoresPage;
