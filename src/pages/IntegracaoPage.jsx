import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import '../styles/integracaoPage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const integrations = [
  { name: 'Amazon', logo: '/assets/logos/amazon-logo.png' },
  { name: 'Shein', logo: '/assets/logos/shein-logo.png' },
  { name: 'Mercado Livre', logo: '/assets/logos/mercadolivre-logo.png' },
  { name: 'Bling', logo: '/assets/logos/bling-logo.png' },
];

export default function IntegracaoPage() {
  const [activeIntegrations, setActiveIntegrations] = useState(integrations);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [integrationToRemove, setIntegrationToRemove] = useState(null);

  const openModal = (name) => {
    setIntegrationToRemove(name);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setIntegrationToRemove(null);
  };

  const confirmRemoveIntegration = () => {
    setActiveIntegrations(activeIntegrations.filter(integration => integration.name !== integrationToRemove));
    closeModal();
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="integracaoContainer">
      <h1>Visão Geral Fornecedor / Vendedor</h1>
      <div className="sliderContainer">
        <Slider {...sliderSettings} className="integrationsHeader">
          {integrations.map((integration, index) => (
            <div key={index} className="sliderItem">
              <img src={integration.logo} alt={integration.name} className="integrationLogoHeader" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="integrationsList">
        {activeIntegrations.map((integration, index) => (
          <div key={index} className="integrationItem">
            <img src={integration.logo} alt={integration.name} className="integrationLogo" />
            <div className="integrationDetails">
              <h2>Integração {integration.name}</h2>
              <button onClick={() => openModal(integration.name)} className="removeButton">
                <i className="pi pi-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmar Exclusão"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Tem certeza que deseja excluir essa integração?</h2>
        <button onClick={confirmRemoveIntegration} className="confirmButton">Sim</button>
        <button onClick={closeModal} className="cancelButton">Não</button>
      </Modal>
    </div>
  );
}
