import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleEventForm = this.handleEventForm.bind(this);
    this.handleEventForm2 = this.handleEventForm2.bind(this);
  }

  handleEventForm() {
    let mostraForm = document.getElementById('formLabel1');
    if (mostraForm) {
      mostraForm.classList.toggle('focused-valid');
    } else {
      console.warn('Elemento formLabel1 não encontrado');
    }
  }

  handleEventForm2() {
    let mostraForm = document.getElementById('formLabel2');
    if (mostraForm) {
      mostraForm.classList.toggle('focused-valid');
    } else {
      console.warn('Elemento formLabel2 não encontrado');
    }
  }

  componentDidMount() {
    const element1 = document.getElementById('formInput1');
    element1.addEventListener('focus', this.handleEventForm);

    const element2 = document.getElementById('formInput2');
    element2.addEventListener('focus', this.handleEventForm2);
  }

  componentWillUnmount() {
    const element1 = document.getElementById('formInput1');
    element1.removeEventListener('focus', this.handleEventForm);

    const element2 = document.getElementById('formInput2');
    element2.removeEventListener('focus', this.handleEventForm2);
  }

  render() {
    return (
      <div className="bodyLogin">
        <div className="headerLogin">
          <div className="inner-header flexCont">
            <div className="login-box">
              <h2>Login do Sistema</h2>
              <form id="formulario" action="/home" method="POST">
                <div className="user-box">
                <label className="labell" id="formLabel1">Login</label>
                <div className="complementar"></div>
                  <input id="formInput1" type="text" />
                </div>
                <div className="user-box">
                <div className="complementar"></div>
                <label className="labell" id="formLabel2">Senha</label>
                  <input id="formInput2" type="text" />
                  
                </div>
                <button className="enviarLogin" type="submit">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Enviar
                </button>
              </form>
            </div>
          </div>
          <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={0}
                fill="rgba(236, 240, 5, 0.6)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={3}
                fill="rgba(236, 240, 5, 0.4)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={5}
                fill="rgba(236, 240, 5, 0.3)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={7}
                fill="rgba(236, 240, 5, 0.2)"
              />
            </g>
          </svg>
        </div>
      </div>

      <div className="footerLogin">
      <p>© 2022 Todos os Direitos Reservados</p><p> ♥ Design By DM Tech</p>
      </div>
    </div>
  );
}
}

export default Login;
