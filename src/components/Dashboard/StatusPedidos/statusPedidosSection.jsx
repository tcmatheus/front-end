import { Accordion, AccordionTab } from "primereact/accordion";

import "../../../styles/Dashboard/StatusPedidos/statusPedidos.css";
import StatusPedidosCard from "./statusPedidosCard";

export default function StatusPedidosSection() {
  return (
    <Accordion activeIndex={0}>
      <AccordionTab>
        <div className="status__container">
          <div>
            <div className="status__container--title">
              <h3>A Enviar</h3>
              <p>10 Vendas</p>
            </div>
            <StatusPedidosCard />
            <StatusPedidosCard />
            <StatusPedidosCard />
          </div>
          <div>
            <div className="status__container--title">
              <h3>Em Preparação</h3>
              <p>10 Vendas</p>
            </div>
            <StatusPedidosCard />
            <StatusPedidosCard />
          </div>
          <div>
            <div className="status__container--title">
              <h3>Em Trânsito</h3>
              <p>10 Vendas</p>
            </div>
            <StatusPedidosCard />
            <StatusPedidosCard />
          </div>
          <div>
            <div className="status__container--title">
              <h3>Finalizadas</h3>
              <p>10 Vendas</p>
            </div>
            <StatusPedidosCard />
            <StatusPedidosCard />
          </div>
        </div>
      </AccordionTab>
    </Accordion>
  );
}
