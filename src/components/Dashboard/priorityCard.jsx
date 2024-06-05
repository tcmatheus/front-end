import { Tag } from "primereact/tag";

import '../../styles/Dashboard/card.css';

export default function PriorityCard({tags}){
    return(
        <div className="priorityCard">
            <div className="priorityCard__header">
                <h3 className="priorityCard__title">Contato por Email</h3>
                <div className="priorityCard__subtitle-container">
                    <p className="priorityCard__subtitle">Atualizado x dias atrás</p>
                    <p className="priorityCard__subtitle">Desde xx/xx/xxxx</p>
                </div>
            </div>
            <div className="priorityCard__tags">
                {tags === "Baixa" && <Tag className="mr-2" icon="pi pi-user" value="Baixa"></Tag>}
                {tags === "Media" && <Tag className="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Média"></Tag>}
                {tags === "Alta"  && <Tag icon="pi pi-times" severity="danger" value="Alta"></Tag>}
            </div>
        </div>
    )
}