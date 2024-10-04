import styled from "styled-components";

export const UsuarioStyle = styled.section`
  .usuario {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f7f7f7;
  }

  .usuario h1 {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
  }

  .usuario form {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
  }

  .usuario form input {
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  .usuario form input:focus {
    border-color: #007bff;
    outline: none;
  }

  .usuario form button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
  }

  .usuario form button:hover {
    background-color: #0056b3;
  }

  .usuario form a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: #ff0000;
    text-decoration: none;
  }

  .usuario form a:hover {
    color: #cc0000;
  }

  .usuario form a svg {
    margin-left: 8px;
    font-size: 24px;
  }

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    .usuario h1 {
      font-size: 24px;
    }

    .usuario form {
      padding: 20px;
    }

    .usuario form input {
      font-size: 14px;
    }

    .usuario form button {
      font-size: 14px;
    }
  }

  /* Para telas muito pequenas */
  @media (max-width: 480px) {
    .usuario h1 {
      font-size: 20px;
    }

    .usuario form {
      padding: 15px;
    }

    .usuario form input {
      font-size: 12px;
      padding: 10px;
    }

    .usuario form button {
      font-size: 12px;
      padding: 10px;
    }

    .usuario form a svg {
      font-size: 20px;
    }
  }
`;
