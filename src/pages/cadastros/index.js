import React from "react";
import Card from "react-bootstrap/Card";
import Secretarias from "./cadSecretarias/";
import Usua from "./cadUsua/";
import Carros from "./cadCarros/";
import Posto from "./cadPosto";
import Limites from "./cadLimites";

function Gasolina() {
  return (
    <>
      <div className="contFlexgrid">
        <Card.Body
          style={{
            height: "3em",
            width: "95%",
            margin: "2% auto 0 auto",
            display: "flex",
            background: "#cfe2ff",
            color: "#3f5061",
            font: "Open Sans",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card.Title>Cadastros</Card.Title>
        </Card.Body>
        {/* Container card cadastro 1*/}
        <div className="flexxGrid">
          {/* Card de cadastrar usuarios */}
          <Usua />
          {/* Card de cadastrar Secretarias */}
          <Secretarias />
          {/* Card de cadastrar carros */}
          <Carros />
        </div>
        {/* Container card cadastro 2*/}
        <div className="flexxGrid">
          {/* Card de cadastrar posto */}
          <Posto />
          {/* Card de cadastrar Limites */}
          <Limites />
        </div>
        <hr />
      </div>
    </>
  );
}
export default Gasolina;
