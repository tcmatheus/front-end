import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

import "../styles/modalProduto.css";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

export default function ModalProduto({ isVisible, produto }) {
  const [isOpen, setIsOpen] = useState(isVisible);
  const [categoria, setCategorias] = useState(null);

  const categorias = [
    { name: "Esporte" },
    { name: "Games" },
    { name: "Banho" },
    { name: "Casa" },
    { name: "Lazer" },
    { name: "Eletrônico" },
  ];

  return (
    <Dialog
      blockScroll={true}
      draggable={false}
      visible={isOpen}
      style={{ width: "80vw", height: "100vh" }}
      onHide={() => {
        if (!isOpen) return;
        setIsOpen(false);
      }}
    >
      <div className="imagemProduto">
        <div>
          <img src={produto.imagem} alt="" width={300} height={340} />
          <div className="botoes">
            <Button label="Adicionar" severity="success" />
            <Button label="Baixar" severity="info" />
            <Button label="Remover" severity="danger" />
          </div>
          <Button label="CADASTRAR PRODUTO" severity="primary" />
        </div>
        <div>
          <div action="" className="infoProduto">
            <div className="formProduto__infoUm">
              <p>Tênis Nike Winflo 10 Masculino</p>
              <div>
                <p>SKU:D00-00000</p>
                <p>Ean: 0000000000000</p>
                <p>Preço de custo: R$ {produto.precoCusto}</p>
                <p>Preço de venda: R$ {produto.precoVenda}</p>
              </div>
            </div>
            <div className="formProduto__infoDois">
              <p>Composição preço de Venda</p>
              <div>
                <p>Custo: R$ {produto.precoCusto}</p>
                <p>Frete: R$ 0</p>
                <p>Comissão: R$ 7.36 (18%)</p>
                <p>Lucro: R$ 2.90 (10%)</p>
              </div>
            </div>
          </div>
          <form action="">
            <div>
              <FloatLabel>
                <InputText id="titulo" />
                <label htmlFor="titulo">Título</label>
              </FloatLabel>
              <FloatLabel>
                <InputText id="lucro" keyfilter="money" />
                <label htmlFor="lucro">Lucro</label>
              </FloatLabel>

              <Dropdown
                value={categoria}
                onChange={(e) => setCategorias(e.value)}
                options={categorias}
                optionLabel="name"
                placeholder="Selecione a categoria"
                className="w-full md:w-14rem"
                checkmark={true}
                highlightOnSelect={false}
              />
              <div>
                <FloatLabel>
                  <InputText id="EAN" />
                  <label htmlFor="EAN">GERAR EAN</label>
                </FloatLabel>
                <Button label="GERAR EAN" severity="info"/>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="m-0">
        <h3>Descrição</h3>
        <p>Quase duas décadas de uma carreira que supera todas as expectativas, LeBron James se recusou a se contentar com nada menos do que a grandeza, mesmo quando foi ele quem estabeleceu o padrão para as próximas gerações. Agora, seu mais recente tênis exclusivo é mais leve, próximo ao chão e turbinado. É diferente de qualquer design que LeBron já vestiu antes - confortável e com suporte, mas com cano baixo, rápido como um relâmpago e criado para ficar à frente do estilo de jogo frenético de hoje.

Suave e ágil
A unidade Zoom Air grande no antepé é curvada para oferecer flexão multidirecional. Ela fornece retorno de energia para curvas rápidas e responsivas e oferece uma sensação de quadra flexível que se move naturalmente com o pé.</p>
      </div>
    </Dialog>
  );
}
