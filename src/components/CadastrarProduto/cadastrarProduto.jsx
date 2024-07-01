import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { useState, useEffect } from "react";

import {
  criarProduto,
  alterarProduto,
  deletarProduto,
} from "../CadastrarProduto/Services/produtosService";

import "../../styles/modalProduto.css";

export default function CadastrarProduto({ produto }) {
  const produtoCadastrado = !!produto;

  const [categoria, setCategorias] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState("");
  const [lucroValor, setLucroValor] = useState(0);
  const [lucroPercentual, setLucroPercentual] = useState(0);
  const [ean, setEan] = useState("");
  const [preco, setPreco] = useState(0);
  const [precoVenda, setPrecoVenda] = useState(0);
  const [sku, setSku] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");
  const [titulo, setTitulo] = useState("");

  const [produtoId, setProdutoId] = useState({});

  const categorias = [{ name: "Produto" }];

  useEffect(() => {
    if (produto) {
      setProdutoId(produto.id);
      setTitulo(produto.nome || "");
      setSku(produto.codigo || "");
      setEan(produto.EAN || "");
      setPreco(produto.preco || 0);
      setPrecoVenda(produto.precoVenda || 0);
      setLucroValor(produto.lucroValor || 0);
      setLucroPercentual(produto.lucroPercentual || 0);
      setImagemUrl(produto.imagemURL || "");
      setDescription(produto.descricaoCurta || "");
      const categoriaEncontrada = categorias.find(
        (cat) => cat.name === produto.categoria
      );
      setCategorias(categoriaEncontrada || null);
      setIngredients(produto.ingredients || []);
    }
  }, [produto]);

  const handleCriaProduto = async () => {
    const novoProduto = {
      nome: titulo,
      tipo: "P",
      formato: "S",
      codigo: sku,
      gtin: ean,
      situacao: "A",
      unidade: "Un",
      preco: preco,
      descricaoCurta: description,
      midia: {
        imagens: {
          externas: [
            {
              link: imagemUrl,
            },
          ],
          internas: [],
        },
      },
      categoria: {
        id: 9924431,
      },
    };

    await criarProduto(novoProduto);
  };

  const handleAlteraProduto = async () => {
    const produtoAtualizado = {
      nome: titulo,
      tipo: "P",
      formato: "S",
      codigo: sku,
      gtin: ean,
      situacao: "A",
      unidade: "Un",
      preco: preco,
      descricaoCurta: description,
      midia: {
        imagens: {
          externas: [
            {
              link: imagemUrl,
            },
          ],
          internas: [],
        },
      },
      categoria: {
        id: 9924431,
      },
    };
    await alterarProduto(produtoId, produtoAtualizado);
  };

  const handleDeletaProduto = async () => {
    await deletarProduto(produtoId);
  };


  const onIngredientsChange = (e) => {
    let _ingredients = [...ingredients];
    if (e.checked) _ingredients.push(e.value);
    else _ingredients.splice(_ingredients.indexOf(e.value), 1);
    setIngredients(_ingredients);
  };

  const generateEAN = (e) => {
    e.preventDefault();
    let novoEan = "";
    for (let i = 0; i < 14; i++) {
      novoEan += Math.floor(Math.random() * 10);
    }
    setEan(novoEan);
  };

  const handleLucroChange = (e) => {
    const valor = parseFloat(e.target.value) || 0;
    setLucroValor(valor);
    const percentual = preco > 0 ? (valor / preco) * 100 : 0;
    setLucroPercentual(percentual.toFixed(2));
    setPrecoVenda(preco + valor);
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
          <img src={produto?.imagemURL} alt="" width={350} height={300} />
          <div className="botoes">
          <FloatLabel className="imagemUrl">
    <InputText
        id="imagemUrl"
        className="imagemtextoUrl"
        style={{ width: '350px', }}
        onChange={(e) => setImagemUrl(e.target.value)}
    />
    <label htmlFor="imagemUrl">Link da Imagem</label>
</FloatLabel>
          </div>
          <div className="imagemProduto__containerBtn">
            {!produtoCadastrado && (
              <Button
                onClick={() => handleCriaProduto()}
                label="CADASTRAR PRODUTO"
                severity="primary"
              />
            )}
            {produtoCadastrado && (
              <div>
                <Button
                  onClick={() => handleAlteraProduto()}
                  label="EDITAR PRODUTO"
                  severity="info"
                />
                <Button
                  onClick={() => handleDeletaProduto()}
                  label="EXCLUIR PRODUTO" severity="danger"
                />
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="infoProduto">
            <div className="formProduto__infoUm">
              <p>{produto?.nome}</p>
              <div>
                <p>SKU: {sku}</p>
                <p>Categoria: {categoria ? categoria.name : "Nenhuma"}</p>
                <p>Ean: {ean || "0000000000000"}</p>
                <p>Preço: R$ {preco}</p>
                <p>Preço de venda: R$ {precoVenda}</p>
                <p>
                  Lucro: R$ {lucroValor} ({lucroPercentual}%)
                </p>
              </div>
            </div>
            <div className="formProduto__infoDois">
              <p>Composição Preço de Venda</p>
              <div>
                <p>Frete: R$ 0</p>
              </div>
            </div>
          </div>
          <form className="formProduto" action="">
            <div>
              <div className="tituloLucroInputs">
                <FloatLabel className="input">
                  <InputText
                    id="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                  />
                  <label htmlFor="titulo">Título</label>
                </FloatLabel>
                <FloatLabel className="input">
                  <InputText
                    id="lucro"
                    keyfilter="money"
                    value={lucroValor}
                    onChange={(e) => handleLucroChange(e)}
                  />
                  <label htmlFor="lucro">Lucro(%)</label>
                </FloatLabel>
              </div>
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
                <InputText
                  className="preco"
                  id="preco"
                  value={preco}
                  onChange={handlePrecoChange}
                />
                <label htmlFor="preco">Preço</label>
              </FloatLabel>

              <FloatLabel className="eaninput">
                <InputText
                  id="EAN"
                  value={ean}
                  onChange={(e) => setEan(e.target.value)}
                />
                <label htmlFor="EAN">EAN</label>
              </FloatLabel>
              <Button
                label="GERAR EAN"
                className="btnEAN"
                severity="info"
                onClick={generateEAN}
              />
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
                  <img
                    src="https://www.bling.com.br/site/assets//images/bling.svg"
                    alt=""
                    className="imagembling"
                  />
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
