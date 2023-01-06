import React from "react";
import Card from "react-bootstrap/Card";

function Gasolina() {
  return (
    <>
      <div className="contConfig">
        {/* Titulo da pagina */}
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
          <Card.Title>Configurações</Card.Title>
        </Card.Body>
        {/* Fim do titulo */}
          <div className="bodyConfig">
                <div className="contBodyConfig">
                   
      {/* formulario para cadastro de nova postos */}
      <form className="formSup" action="">
          <div className="modBodyG">
            <div className="formGrupG">
              <input type="number" step="0.01" placeholder="Preço por litro da gasolina Ex: 5,31" />
            </div>
            <div className="formGrupG">
              <input type="text" placeholder="Informações Adicionais" />
            </div>
            <div className="formGrupG">
              <input type="text" placeholder="Informações Adicionais" />
            </div>
            <div className="modFooterG">
            <input type="submit" />
          </div>
            </div>
      </form>
                </div>
          </div>
      </div>
    </>
  );
}
export default Gasolina;
