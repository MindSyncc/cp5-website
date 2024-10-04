import styled from 'styled-components';

export const LoginStyle = styled.section`
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
}

.container-login {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 400px;
  width: 100%;
}

.login {
  text-align: center;
}

.titulo-login {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.w-input {
  margin-bottom: 20px;
}

.input-form {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.input-form:focus {
  border-color: #007bff;
  outline: none;
}

.login-btn {
  margin-top: 20px;
}

.login-form-btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.login-form-btn:hover {
  background-color: #0056b3;
}

.utilidades {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.utilidades li {
  margin-bottom: 10px;
}

.utilidades .text1 {
  color: #333;
}

.utilidades a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.utilidades a:hover {
  text-decoration: underline;
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
  .container-login {
    padding: 20px;
  }

  .titulo-login {
    font-size: 20px;
  }

  .input-form {
    font-size: 14px;
    padding: 8px;
  }

  .login-form-btn {
    font-size: 14px;
    padding: 8px;
  }

  .utilidades .text1 {
    font-size: 14px;
  }

  .utilidades a {
    font-size: 14px;
  }
}

/* Para telas muito pequenas */
@media (max-width: 480px) {
  .container-login {
    padding: 15px;
  }

  .titulo-login {
    font-size: 18px;
  }

  .input-form {
    font-size: 12px;
    padding: 6px;
  }

  .login-form-btn {
    font-size: 12px;
    padding: 6px;
  }

  .utilidades .text1 {
    font-size: 12px;
  }

  .utilidades a {
    font-size: 12px;
  }
}


`;
