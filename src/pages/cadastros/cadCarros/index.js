import React from "react";
import { FaCarAlt, FaRegWindowClose } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Carros() {
  const [Carros, setCarros] = React.useState(false);

  return (
    <>
      {/* Card de cadastrar carros */}
      <div className="card card-3" onClick={() => setCarros(!Carros)}>
        <div className="dividir">
          <h4>Cadastro de Veículo</h4>
        </div>
        <div className="lineCad"></div>
        <div className="dividirDois">
          <FaCarAlt className="iconeCard" />
        </div>
      </div>

    {/* formulario para cadastro de nova postos */}
    <form className=" formUser formSup" action="" style={{ display: Carros ? "block" : "none" }}>
       <div className="tituCard">
          <h3>Cadastro de Veículo</h3>
          <FaRegWindowClose
            className="iconClose"
            onClick={() => setCarros(!Carros)}
          />
        </div>
          <div className="modBodyG">
            <div className="formGrupG">
              <input name="modelo" type="text" placeholder="Modelo" />
            </div>
            <div className="formGrupG">
              <input name="chassi" type="text" placeholder="Chassi" />
            </div>
            <div className="formGrupG">
              <input name="renavan" type="text" placeholder="Renavan" />
            </div>
            <div className="formGrupG">
              <input name="secretariaCarro" type="text" placeholder="Secretaria" />
            </div>
            <div className="modFooterG">
            <input type="submit" />
          </div>
            </div>
           
      </form>
      {/* -----FIM------> Modal formulário cadastro carros */}
    </>
  );
}
export default Carros;
