import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { ProdutosStyle } from '../../routes/Produtos/ProdutosStyle';

const ListarProdutos = () => {
    const [produtos, setProdutos] = useState([]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/produtos/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            setProdutos(produtos.filter(produto => produto.id !== id)); // Remove produto da lista
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        fetch('http://localhost:5000/produtos/')
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
            <h2>Listar Produtos Cadastrados</h2>
            <Link to="/cadastrarProduto">Cadastrar Novo Produto</Link>
            <table>
                <thead>
                    <tr>
                        <th>Nome do Produto</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td>
                                <Link to={`/cadastrarProduto/${produto.id}`}>
                                    <FaEdit />
                                </Link>
                                <button onClick={() => handleDelete(produto.id)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
        </ProdutosStyle>
    );
};

export default ListarProdutos;
