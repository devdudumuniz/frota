import React from "react";
import { ReactLocation, Router } from "react-location";
import Secre from "../pages/secretarias";
import Home from "../pages/home/Index";
import Postos from "../pages/postos";
import Carros from "../pages/carro";
import LimitesMensais from "../pages/limites";
import Cadastros from "../pages/cadastros";
import Movimentos from "../pages/movimento";
import Relatorios from "../pages/relatorios";
import Config from "../pages/config";
import CadSecretaria from "../pages/cadastros/cadSecretarias";
import Perfi from "../pages/perfil/perfil";
import Senha from "../pages/senha/senha";

const reactLocation = new ReactLocation();
//rotas e redirecionamentos de páginas
function RotasPages() {
  return (
    <Router
      location={reactLocation}
      routes={[
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/secretaria",
          element: <Secre />,
        },
        {
          path: "/postos",
          element: <Postos />,
        },
        {
          path: "/carros",
          element: <Carros />,
        },
        {
          path: "/limiteMes",
          element: <LimitesMensais />,
        },
        {
          path: "/cadastros",
          element: <Cadastros />,
        },
        {
          path: "/movimentos",
          element: <Movimentos />,
        },
        {
          path: "/relatorios",
          element: <Relatorios />,
        },
        {
          path: "/config",
          element: <Config />,
        },
        {
          path: "/cadastrarSecretaria",
          element: <CadSecretaria />,
        },
        {
          path: "/perfil",
          element: <Perfi />,
        },
        {
          path: "/senha",
          element: <Senha />,
        }
      ]}
    />
  );
}
export default RotasPages;
