import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

import "../../styles/modalProduto.css";

export default function CadastrarProduto({produto}) {

    const userType = localStorage.getItem("userType");

    const [categoria, setCategorias] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [description, setDescription] = useState();
    
  const categorias = [
    { name: "Esporte" },
    { name: "Games" },
    { name: "Banho" },
    { name: "Casa" },
    { name: "Lazer" },
    { name: "Eletrônico" },
  ];

  const onIngredientsChange = (e) => {
    let _ingredients = [...ingredients];

    if (e.checked) _ingredients.push(e.value);
    else _ingredients.splice(_ingredients.indexOf(e.value), 1);

    setIngredients(_ingredients);
  };

  return (
    <>
      <div className="imagemProduto">
        <div className="imagemProduto__container">
          <img src={produto?.imagem} alt="" width={300} height={340} />
          <div className="botoes">
            <Button label="Adicionar" severity="success" />
            {userType === "Vendedor" && (
              <>
                <Button label="Baixar" severity="info" />
                <Button label="Remover" severity="danger" />
              </>
            )}
          </div>
          <div className="imagemProduto__containerBtn">
            <Button label="CADASTRAR PRODUTO" severity="primary" />
          </div>
        </div>
        <div>
          <div action="" className="infoProduto">
            <div className="formProduto__infoUm">
              <p>Tênis Nike Winflo 10 Masculino</p>
              <div>
                <p>SKU:D00-00000</p>
                <p>Ean: 0000000000000</p>
                <p>Preço de custo: R$ {produto?.precoCusto}</p>
                <p>Preço de venda: R$ {produto?.precoVenda}</p>
              </div>
            </div>
            <div className="formProduto__infoDois">
              <p>Composição preço de Venda</p>
              <div>
                <p>Custo: R$ {produto?.precoCusto}</p>
                <p>Frete: R$ 0</p>
                <p>Comissão: R$ 7.36 (18%)</p>
                <p>Lucro: R$ 2.90 (10%)</p>
              </div>
            </div>
          </div>
          <form className="formProduto" action="">
            <div>
              <div className="tituloLucroInputs">
                <FloatLabel className="input">
                  <InputText id="titulo" />
                  <label htmlFor="titulo">Título</label>
                </FloatLabel>
                <FloatLabel className="input">
                  <InputText id="lucro" keyfilter="money" />
                  <label htmlFor="lucro">Lucro(%)</label>
                </FloatLabel>
              </div>

              <Dropdown
                value={categoria}
                onChange={(e) => setCategorias(e.value)}
                options={categorias}
                optionLabel="name"
                placeholder="Selecione a categoria"
                className="w-full md:w-14rem input dropdown"
                checkmark={true}
                highlightOnSelect={false}
              />
              <div className="inputEAN">
                <FloatLabel className="input">
                  <InputText id="EAN" />
                  <label htmlFor="EAN">GERAR EAN</label>
                </FloatLabel>
                <Button label="GERAR EAN" className="btnEAN" severity="info" />
              </div>
            </div>

            <div className="checkboxGroup flex flex-wrap justify-content-center gap-3">
              <div className="flex checkbox align-items-center">
                <Checkbox
                  inputId="ingredient1"
                  name="pizza"
                  value="Cheese"
                  onChange={onIngredientsChange}
                  checked={ingredients.includes("Cheese")}
                />
                <label htmlFor="ingredient1" className="ml-2">
                  <img src="https://www.picsum.photos/100" alt="" />
                </label>
              </div>
              <div className="flex checkbox align-items-center">
                <Checkbox
                  inputId="ingredient2"
                  name="pizza"
                  value="Mushroom"
                  onChange={onIngredientsChange}
                  checked={ingredients.includes("Mushroom")}
                />
                <label htmlFor="ingredient2" className="ml-2">
                  <img src="https://www.picsum.photos/100" alt="" />
                </label>
              </div>
              <div className="flex checkbox align-items-center">
                <Checkbox
                  inputId="ingredient3"
                  name="pizza"
                  value="Pepper"
                  onChange={onIngredientsChange}
                  checked={ingredients.includes("Pepper")}
                />
                <label htmlFor="ingredient3" className="ml-2">
                  <img src="https://www.picsum.photos/100" alt="" />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <FloatLabel className="descriptionInput">
        <InputTextarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={10}
          cols={120}
        />
        <label htmlFor="description">Descrição do Produto</label>
      </FloatLabel>
    </>
  );
}
