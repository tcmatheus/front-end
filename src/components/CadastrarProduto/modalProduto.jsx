import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

import "../../styles/modalProduto.css";
import CadastrarProduto from "./cadastrarProduto";

export default function ModalProduto({ isVisible, produto }) {
  const [isOpen, setIsOpen] = useState(isVisible);
  const [categoria, setCategorias] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState();

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
      <CadastrarProduto produto={produto}/>
    </Dialog>
  );
}
