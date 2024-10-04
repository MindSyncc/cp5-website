import styled from "styled-components";

export const ProdutosStyle = styled.section`
  .listarProdutos {
    padding: 20px;
  }

  .listarProdutos h2 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }

  .listarProdutos a {
    display: inline-block;
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    margin-bottom: 20px;
    text-decoration: none;
    border-radius: 5px;
  }

  .listarProdutos a:hover {
    background-color: #0056b3;
  }

  .listarProdutos table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  .listarProdutos table th,
  .listarProdutos table td {
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
  }

  .listarProdutos table th {
    background-color: #f4f4f4;
  }

  .listarProdutos table td button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .listarProdutos table td button:hover {
    color: red;
  }

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    .listarProdutos table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }

    .listarProdutos a {
      display: block;
      width: 100%;
      text-align: center;
      margin-bottom: 20px;
    }

    .listarProdutos h2 {
      font-size: 20px;
    }

    .listarProdutos table th,
    .listarProdutos table td {
      font-size: 14px;
      padding: 10px;
    }
  }

  /* Para telas muito pequenas, como smartphones */
  @media (max-width: 480px) {
    .listarProdutos table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }

    .listarProdutos h2 {
      font-size: 18px;
    }

    .listarProdutos a {
      padding: 10px;
      font-size: 14px;
    }

    .listarProdutos table th,
    .listarProdutos table td {
      font-size: 12px;
    }

    .listarProdutos table td button {
      font-size: 16px;
    }
  }
`;
