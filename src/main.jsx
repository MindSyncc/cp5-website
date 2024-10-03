import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Error from "./routes/Error/Error.jsx";
import Home from "./routes/Home/Home.jsx";
import Login from "./routes/Login/Login.jsx";
import Sobre from "./routes/Sobre/Sobre.jsx";
import Produtos from "./routes/Produtos/Produtos.jsx";
import Cadastro from "./routes/CadastrarProdutos/CadastrarProdutos.jsx";
import ListarProdutos from "./routes/ListarProdutos/ListarProdutos.jsx";
import Usuario from './routes/Usuario/Usuario.jsx'

// Função que cria as rotas

const router = createBrowserRouter([
  {
    //Elementos Pai
    path: "/",
    element: <App />,
    errorElement: <Error />,

    //Elementos Filho
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/produtos", element: <Produtos /> },
      { path: "/cadastrarProduto", element: <Cadastro /> },

        //listar
        {path:'/listarprodutos',element:<ListarProdutos/>},

        {path:'/usuario',element:<Usuario/>},

        //Editar
  
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);