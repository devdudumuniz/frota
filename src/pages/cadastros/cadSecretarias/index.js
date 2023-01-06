import React from "react";
import {
    FaBuilding,
    FaRegWindowClose,
  } from "react-icons/fa";
  import Button from "react-bootstrap/Button";
  import Form from "react-bootstrap/Form";


function Secretarias() {
  const [Secre, setSecre] = React.useState(false);
  return (
    <>
      {/* Card de cadastrar Secretarias */}
      <div className="card card-2" onClick={() => setSecre(!Secre)}>
        <div className="dividir">
          <h4>Cadastro de Secretarias</h4>
        </div>
        <div className="lineCad"></div>
        <div className="dividirDois">
          <FaBuilding className="iconeCard" />
        </div>
      </div>


     {/* formulario para cadastro de nova postos */}
     <form className=" formUser formSup" action="" style={{ display: Secre ? "block" : "none" }}>
       <div className="tituCard">
          <h3>Cadastro de Secretarias</h3>
          <FaRegWindowClose
            className="iconClose"
            onClick={() => setSecre(!Secre)}
          />
        </div>
          <div className="modBodyG">
            <div className="formGrupG">
              <input name="nomeUsua" type="text" placeholder="Nome Secretaria" />
            </div>
            <div className="formGrupG">
              <input name="dataCad" type="date" />
            </div>
            <div className="modFooterG">
            <input type="submit" />
          </div>
            </div>
           
      </form>
        {/* -----FIM------> Modal formulário cadastro secretarias */}

    </>
  );
}
export default Secretarias;
