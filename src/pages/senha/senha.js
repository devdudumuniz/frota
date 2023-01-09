import React from "react";
import Card from "react-bootstrap/Card";



function Senha(){
   return(
     <>
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
        <Card.Title>Alteração da senha do Usuário</Card.Title>
      </Card.Body>
      {/* Fim do titulo */}

    <form className="perfil">
      <div className="bodyPerfil">
        <div className="formGrupG">
          <label htmlFor="name">Senha Atual:</label>
          <input name="nomeCompleto" type="text" />
        </div>
        <div style={{
            padding: "0",
            margin: "0 auto",
            display:"flex",
            justifyContent: "start",
            width: "90%"
          }} className="formGrupG">
          <input style={{
            width: "5%",
            height:"1em",
            margin:" auto 0"
          }} type="checkbox" name="naoSei"/>
          <label style={{
            marginLeft: "1%",
            marginRight: "15%",
            width: "78%",
          }} for="naoSei">Esqueci Minha Senha</label>
        </div>
        <div className="formGrupG">
          <label htmlFor="documento">Nova Senha :</label>
          <input name="documento" type="text" />
        </div>
        <div className="formGrupG">
          <label htmlFor="email">Repita a Nova Senha:</label>
          <input name="password" type="email" />
        </div>

        <div className="modFooterG">
          <input type="submit" />
        </div>
      </div>
    </form>
  </>
  )
}


export default Senha;