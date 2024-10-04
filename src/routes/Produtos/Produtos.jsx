import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ProdutosStyle } from "../../routes/Produtos/ProdutosStyle";

const ListarProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/produtos/")
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ProdutosStyle>
      <section className="listarProdutos">
        <h2>Lista de Produtos</h2>
        <Link to="/cadastrarProduto">Cadastrar Novo Produto</Link>
        <table>
          <thead>
            <tr>
              <th>Nome do Produto</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </ProdutosStyle>
  );
};

export default ListarProdutos;
