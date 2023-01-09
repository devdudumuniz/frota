import React, { ReactDOM } from "react";
import FotoPerfil from "../../image/semfoto.jpg";
import "./perfil.less";

function perfil() {
  return (
    <>
      <form className="perfil">
        <div className="headerPerfil">
          <div className="contFotoPerfil">
            <img className="fotoPerfil" src={FotoPerfil} alt="foto perfil" />
            <input type="file" />
          </div>
        </div>
        <div className="lineH"></div>
        <div className="bodyPerfil">
          <div className="formGrupG">
            <label htmlFor="name">Nome Completo:</label>
            <input name="nomeCompleto" type="text" />
          </div>
          <div className="formGrupG">
            <label htmlFor="documento">Documento:</label>
            <input name="documento" type="text" />
          </div>
          <div className="formGrupG">
            <label htmlFor="email">Email:</label>
            <input name="email" type="email" />
          </div>
          <div className="formGrupG">
            <label htmlFor="secretaria">Secretaria:</label>
            <input name="secretaria" type="text" />
          </div>
          <div className="modFooterG">
            <input type="submit" />
          </div>
        </div>
      </form>
    </>
  );
}
export default perfil;
