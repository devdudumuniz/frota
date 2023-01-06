import React from "react";
import { FaUserPlus, FaRegWindowClose } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Usua() {
  const [User, setUser] = React.useState(false);
  return (
    <>
      {/* Card de cadastrar usuarios */}
      <div className="card card-1" onClick={() => setUser(!User)}>
        <div className="dividir">
          <h4>Cadastro de Usuários</h4>
        </div>
        <div className="lineCad"></div>
        <div className="dividirDois">
          <FaUserPlus className="iconeCard" />
        </div>
      </div>


       {/* formulario para cadastro de nova postos */}
       <form className=" formUser formSup" action="" style={{ display: User ? "block" : "none" }}>
       <div className="tituCard">
          <h3>Cadastro de Usuários</h3>
          <FaRegWindowClose
            className="iconClose"
            onClick={() => setUser(!User)}
          />
        </div>
          <div className="modBodyG">
            <div className="formGrupG">
              <input name="nomeUsua" type="text" placeholder="Nome Usuário" />
            </div>
            <div className="formGrupG">
              <input name="identifica" type="text" placeholder="Documento de identificação" />
            </div>
            <div className="formGrupG">
              <input name="cargo" type="text" placeholder="Cargo" />
            </div>
            <div className="formGrupG">
              <input name="secretaria" type="text" placeholder="Secretaria" />
            </div>
            <div className="modFooterG">
            <input type="submit" />
          </div>
            </div>
           
      </form>

      {/* -----FIM------> Modal formulário cadastro usuário */}
    </>
  );
}
export default Usua;
