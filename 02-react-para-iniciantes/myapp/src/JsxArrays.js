import React from "react";

const JsxArrays = () => {
  const produtos = ["Poco F3", "Poco M1", "Poco Global"];

  const filmes = [
    { id: 1, nome: "Os 300 Spartanos", ano: 2013 },
    { id: 2, nome: "300 A ascensão do Império", ano: 2015 },
    { id: 3, nome: "Lágrimas do Sol", ano: 2005 },
    { id: 4, nome: "Um Sonho de liberdade", ano: 2016 },
    { id: 5, nome: "Power Rangers", ano: 2010 },
  ];

  const listaProdutos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 2000",
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      id: 2,
      nome: "Notebook",
      preco: "R$ 3000",
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      id: 3,
      nome: "Tablet",
      preco: "R$ 1500",
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
  ];

  return (
    <>
      <h1>JSX Arrays</h1>
      <span>____________________________________________</span>
      <h2>Celulares</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto}>{produto}</li>
        ))}
      </ul>

      <h2>Filmes</h2>
      <ul>
        {filmes
          .filter(({ ano }) => ano > 2010)
          .map(({ nome, ano, id }) => (
            <li key={id}>
              {nome}, {ano}
            </li>
          ))}
      </ul>

      <h2>Lista de Compras</h2>
      <section>
        {listaProdutos
          .filter(({ preco }) => Number(preco.replace("R$ ", "")) > 1500)
          .map(({ nome, id, preco, cores }) => (
            <div key={id}>
              <h3>{nome}</h3>
              <p>Preço: {preco}</p>
              <ul>
                {cores.map((cor) => (
                  <li key={cor} style={{ backgroundColor: cor, color: "#fff" }}>
                    {cor}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </section>

      <span>____________________________________________</span>
    </>
  );
};

export default JsxArrays;
