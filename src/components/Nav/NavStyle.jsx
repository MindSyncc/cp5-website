import styled from "styled-components";

export const NavStyle = styled.section`
  .custom-navbar {
    background-color: #0d0d0d;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  .custom-navbar .nav-link {
    color: #f2f2f2;
  }

  .custom-navbar .nav-link:hover {
    color: #d3d3d3;
  }

  .brand {
    color: #d40000;
    font-size: 2rem;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif, "Gill Sans MT",
      Calibri, "Trebuchet MS", sans-serif;
  }
  @media (max-width: 600px) {
    * {
      font-size: 0.8rem;
    }
    .brand {
      font-size: 1.2rem;
    }

    .custom-navbar {
      padding: 15px;
    }
  }
`;
