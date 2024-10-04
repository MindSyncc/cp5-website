import styled from 'styled-components';

export const CadastrarProdutoStyle = styled.section`

.App {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
}

h1 {
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

form input {
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

form input:focus {
  border-color: #007bff;
  outline: none;
}

form button {
  padding: 12px;
  font-size: 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

form button:hover {
  background-color: #218838;
}

h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

table {
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

table th, table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

table th {
  background-color: #007bff;
  color: #fff;
}

table tr:hover {
  background-color: #f1f1f1;
}

table td {
  font-size: 16px;
  color: #555;
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
  form {
    padding: 15px;
  }

  form input, form button {
    font-size: 14px;
    padding: 10px;
  }

  table th, table td {
    padding: 10px;
    font-size: 14px;
  }
}

/* Para telas muito pequenas */
@media (max-width: 480px) {
  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  form {
    padding: 10px;
  }

  table {
    max-width: 100%;
  }

  table th, table td {
    padding: 8px;
    font-size: 12px;
  }
}

`;


