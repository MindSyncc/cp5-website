import styled from "styled-components";

export const HomeStyle = styled.section`
  .carousel-item img {
    max-height: 350px; /* Altura máxima da imagem */
  }

  .jumbotron {
    background-color: white;
    border: none;
    color: black;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    cursor: pointer;
    margin-top: 40px;
    margin-bottom: 80px;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    padding: 20px;
  }
  .card {
    margin: 10px;
    background-color: #f2f2f2;
    border: none;
  }

  .card .btn-primary {
    background-color: #404040;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.3s ease;
  }

  .card .btn-primary:hover {
    background-color: #737373;
    color: #fff;
  }
  .custom-btn {
    margin-top: 10px;
    background-color: #404040;
    border: none;
    color: #f2f2f2;
    border-radius: 20px;
    padding: 5px 20px;
    font-weight: 300;
  }

  .custom-btn:hover {
    background-color: #737373;
  }
  @media (max-width: 600px) {
    * {
      font-size: 0.8rem;
    }
    .jumbotron {
      padding: 10px;
    }
    .display-4 {
      font-size: 1.5rem;
    }
  }
`;
