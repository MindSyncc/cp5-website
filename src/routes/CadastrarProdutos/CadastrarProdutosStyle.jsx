import styled from "styled-components";

export const CadastrarProdutoStyle = styled.div`
  /* Estilo geral da página */
  .App {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    padding: 10px;
    background-color: #007bff;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #0056b3;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  th,
  td {
    padding: 12px;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 16px;
  }

  th {
    background-color: #f8f8f8;
    font-weight: bold;
  }

  td button {
    background-color: #dc3545;
    border: none;
    padding: 6px 10px;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-size: 14px;
  }

  td button:hover {
    background-color: #c82333;
  }

  /* Responsividade */
  @media (max-width: 600px) {
    .App {
      padding: 10px;
    }

    form {
      flex-direction: column;
      gap: 10px;
    }

    input {
      font-size: 14px;
    }

    button {
      font-size: 14px;
    }

    th,
    td {
      font-size: 14px;
      padding: 10px;
    }
  }
`;
