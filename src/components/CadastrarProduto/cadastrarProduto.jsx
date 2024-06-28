import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

import "../../styles/modalProduto.css";

export default function CadastrarProduto({ produto }) {
  const userType = localStorage.getItem("userType");

  const [categoria, setCategorias] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState();
  const [ean, setEan] = useState("");
  const [lucroValor, setLucroValor] = useState(0);
  const [lucroPercentual, setLucroPercentual] = useState(0);
  const [preco, setPreco] = useState(0);
  const [precoVenda, setPrecoVenda] = useState(0);
  const [sku, setSku] = useState("");

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

  const generateEAN = (e) => {
    e.preventDefault();  
    let ean = '';
    for (let i = 0; i < 15; i++) {
      ean += Math.floor(Math.random() * 10); 
    }
    setEan(ean); 
  };

  const handleLucroChange = (e) => {
    const valor = parseFloat(e.target.value) || 0;
    setLucroValor(valor);
    const percentual = preco > 0 ? (valor / preco) * 100 : 0;
    setLucroPercentual(percentual.toFixed(2));
  };

  const handlePrecoChange = (e) => {
    const novoPreco = parseFloat(e.target.value) || 0;
    setPreco(novoPreco);
    setPrecoVenda(novoPreco + lucroValor);
    const percentual = lucroValor > 0 ? (lucroValor / novoPreco) * 100 : 0;
    setLucroPercentual(percentual.toFixed(2));
  };

  const handleSkuChange = (e) => {
    setSku(e.target.value);
  };

  return (
    <>
      <div className="imagemProduto">
        <div className="imagemProduto__container">
          <img src={produto?.imagemURL} alt="" width={300} height={340} />
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
          <div className="infoProduto">
            <div className="formProduto__infoUm">
              <p>{produto?.nome}</p>
              <div>
                <p>SKU: {sku}</p>
                <p>Categoria: {categoria ? categoria.name : 'Nenhuma'}</p>
                <p>Ean: {ean || '0000000000000'}</p> 
                <p>Preço: R$ {preco}</p>
                <p>Preço de venda: R$ {precoVenda}</p>
                <p>Lucro: R$ {lucroValor} ({lucroPercentual}%)</p>
              </div>
            </div>
            <div className="formProduto__infoDois">
              <p>Composição preço de Venda</p>
              <div>
                <p>Custo: R$ {produto?.precoCusto}</p>
                <p>Frete: R$ 0</p>
                <p>Comissão: R$ 7.36 (18%)</p>
                <p>Lucro: R$ {lucroValor} ({lucroPercentual}%)</p>
              </div>
            </div>
          </div>
          <form className="formProduto">
            <div className="tituloLucroInputs">
              <FloatLabel className="input">
                <InputText id="titulo" />
                <label htmlFor="titulo">Título</label>
              </FloatLabel>
              <FloatLabel className="input">
                <InputText id="lucro" keyfilter="money" value={lucroValor} onChange={handleLucroChange} />
                <label htmlFor="lucro">Lucro(%)</label>
              </FloatLabel>
            </div>

            <Dropdown
              value={categoria}
              onChange={(e) => setCategorias(e.value)}
              options={categorias}
              optionLabel="name"
              placeholder="Selecione a categoria"
              className="dropdowncategoria"
              checkmark={true}
              highlightOnSelect={false}
            />

            <div className="inputEAN">
              <FloatLabel>
                <InputText className="preco" id="preco" value={preco} onChange={handlePrecoChange} />
                <label htmlFor="preco">Preço</label>
              </FloatLabel>

              <FloatLabel className="eaninput">
                <InputText id="EAN" value={ean} onChange={(e) => setEan(e.target.value)} />
                <label htmlFor="EAN">Gerar EAN</label>
              </FloatLabel>
              <Button label="GERAR EAN" className="btnEAN" severity="info" onClick={generateEAN} />
            </div>

            <FloatLabel className="sku">
              <InputText id="sku" value={sku} onChange={handleSkuChange} />
              <label htmlFor="sku">SKU</label>
            </FloatLabel>

            <div className="checkboxGroup flex flex-wrap justify-content-center gap-3">
              <div className="flex checkbox align-items-center">
                <Checkbox
                  inputId="ingredient1"
                  name="pizza"
                  value="Cheese"
                  onChange={onIngredientsChange}
                  checked={ingredients.includes("Cheese")}
                />
                <label htmlFor="ingredient1" className="bling">
                  <img src="https://www.bling.com.br/site/assets//images/bling.svg" alt="" />
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
