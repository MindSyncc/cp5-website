import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Error from "./routes/Error.jsx";
import Home from "./routes/Home.jsx";
import Login from "./routes/Login.jsx";
import Sobre from "./routes/Sobre.jsx";
import Produtos from "./routes/Produtos.jsx";
import Cadastro from "./routes/CadastrarProdutos.jsx";

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
      { path: "/cadastrarprodutos", element: <Cadastro /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);