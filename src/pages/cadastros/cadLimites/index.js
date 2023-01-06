import React from "react";
import { FaChartBar, FaRegWindowClose } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Limites() {
  const [Limites, setLimites] = React.useState(false);

  return (
    <>
      {/* Card de cadastrar Limites */}
      <div className="card card-5" onClick={() => setLimites(!Limites)}>
        <div className="dividir">
          <h4>Cadastro de Limites</h4>
        </div>
        <div className="lineCad"></div>
        <div className="dividirDois">
          <FaChartBar className="iconeCard" />
        </div>
      </div>

      {/* Início Modal formulário cadastro limites */}
      <div className="contForm" style={{ display: Limites ? "block" : "none" }}>
        <div className="tituCard">
          <h3>Cadastro de Limites</h3>
          <FaRegWindowClose
            className="iconClose"
            onClick={() => setLimites(!Limites)}
          />
        </div>

     {/* formulario para cadastro de nova postos */}
     <form className=" formUser formSup" action="" style={{ display: Limites ? "block" : "none" }}>
       <div className="tituCard">
          <h3>Cadastro de Limites</h3>
          <FaRegWindowClose
            className="iconClose"
            onClick={() => setLimites(!Limites)}
          />
        </div>
          <div className="modBodyG">
            <div className="formGrupG">
              <input name="secretaria" type="text" placeholder="Secretaria" />
            </div>
            <div className="formGrupG">
              <input name="valor" type="text" placeholder="10.000" />
            </div>
            <div className="formGrupG">
              <input name="dataLimite" type="date" />
            </div>
            <div className="modFooterG">
            <input type="submit" />
          </div>
            </div>
           
      </form>
        {/* -----FIM------> Modal formulário cadastro secretarias */}
      </div>
      {/* -----FIM------> Modal formulário cadastro limites */}
    </>
  );
}
export default Limites;
