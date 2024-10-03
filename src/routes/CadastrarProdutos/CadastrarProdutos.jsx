import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cadastro = () => {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({ nome: '', preco: '' });

  // Função para buscar produtos
  const fetchProdutos = async () => {
    const response = await axios.get('http://localhost:5000/produtos');
    setProdutos(response.data);
  };

  // Função para cadastrar produto
  const cadastrarProduto = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/produtos', novoProduto);
    setNovoProduto({ nome: '', preco: '' }); // Limpar formulário
    fetchProdutos(); // Atualizar lista de produtos
  };

  // Hook para buscar produtos quando o componente é montado
  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <div className="App">
      <h1>Cadastro de Produtos</h1>
      <form onSubmit={cadastrarProduto}>
        <input
          type="text"
          name="nome"
          value={novoProduto.nome}
          placeholder="Nome do Produto"
          onChange={(e) => setNovoProduto({ ...novoProduto, nome: e.target.value })}
          required
        />
        <input
          type="number"
          name="preco"
          value={novoProduto.preco}
          placeholder="Preço do Produto"
          onChange={(e) => setNovoProduto({ ...novoProduto, preco: e.target.value })}
          required
        />
        <button type="submit">Cadastrar Produto</button>
      </form>

      <h2>Produtos Cadastrados</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
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
    </div>
  );
};

export default Cadastro;
