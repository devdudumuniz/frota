import React from "react";
import { FaGasPump, FaRegWindowClose } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Gasolina(){
    const [Posto, setPosto] = React.useState(false);
    return(
        <>
         {/* Card de cadastrar posto */}
          <div className="card card-4" onClick={() => setPosto(!Posto)}>
            <div className="dividir">
              <h4>Cadastro de Posto</h4>
            </div>
            <div className="lineCad"></div>
            <div className="dividirDois">
              <FaGasPump className="iconeCard" />
            </div>
          </div>


     {/* formulario para cadastro de nova postos */}
     <form className=" formUser formSup" action="" style={{ display: Posto ? "block" : "none" }}>
       <div className="tituCard">
          <h3>Cadastro do Posto</h3>
          <FaRegWindowClose
            className="iconClose"
            onClick={() => setPosto(!Posto)}
          />
        </div>
          <div className="modBodyG">
            <div className="formGrupG">
              <input name="nomeUsua" type="text" placeholder="Nome do Posto" />
            </div>
            <div className="formGrupG">
              <input name="dataCad" type="text" placeholder="CNPJ" />
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
    )
}
export default Gasolina;