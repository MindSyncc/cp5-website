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
    justify-content: space-between;
    margin: 20px;
  }
  .custom-btn {
    margin-top: 10px;
  background-color: #404040;
  border:none;
  color: #F2F2F2;
  border-radius: 20px;
  padding: 5px 20px;
  font-weight: 300;
}

.custom-btn:hover {
  background-color: #737373;
}

  @media (max-width: 600px) {
    .card{
      width: 80vh;
    }

  }
`;
