import React, { useState } from 'react';
import '../styles/integracaoPage.css';

const integrations = [
  { name: 'Amazon', logo: '/assets/logos/amazon-logo.png' },
  { name: 'Shein', logo: '/assets/logos/shein-logo.png' },
  { name: 'Mercado Livre', logo: '/assets/logos/mercadolivre-logo.png' },
  { name: 'Bling', logo: '/assets/logos/bling-logo.png' },
];

export default function IntegracaoPage() {
  const [activeIntegrations, setActiveIntegrations] = useState(integrations);

  const handleRemoveIntegration = (name) => {
    setActiveIntegrations(activeIntegrations.filter(integration => integration.name !== name));
  };

  return (
    <div className="integracaoContainer">
      <h1>Visão Geral Fornecedor / Vendedor</h1>
      <div className="integrationsHeader">
        {integrations.map((integration, index) => (
          <img key={index} src={integration.logo} alt={integration.name} className="integrationLogoHeader" />
        ))}
      </div>
      <div className="integrationsList">
        {activeIntegrations.map((integration, index) => (
          <div key={index} className="integrationItem">
            <img src={integration.logo} alt={integration.name} className="integrationLogo" />
            <div className="integrationDetails">
              <h2>Integração {integration.name}</h2>
              <button onClick={() => handleRemoveIntegration(integration.name)} className="removeButton">
                Excluir essa integração
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
