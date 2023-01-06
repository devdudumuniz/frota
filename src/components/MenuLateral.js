import React, { Component } from "react";
import {FaRegWindowClose, FaChartPie, FaUsersCog, FaGasPump, FaCar, FaChartBar, FaUserPlus, FaExchangeAlt, FaChartLine, FaCog } from "react-icons/fa";

import logo from "../image/logopref.png";

class MenuLateral extends Component {
  constructor(props) {
    super(props);
    this.esconder = this.esconder.bind(this);
  }

  esconder() {
  this.menu.classList.toggle("show");
  }

  render() {
    return (
      <nav id="lateral" className="menuLateral" ref={el => (this.menu = el)}>
        <ul className="lef">
          <div className="contLogo">
            <img className="imgLogo" src={logo} alt="imglogoMini" />
          </div>
          {/*icone de esconder o menu se clicar*/}
          <FaRegWindowClose
            className="iconClose fechar" onClick={this.esconder}/>
          <div className="line"></div>

        <a className="linksMenu" href="/home">
          <i>
            <FaChartPie />
          </i>
          <li>Dashboard</li>
        </a>
        <div className="line"></div>

        <a  className="linksMenu" href="/secretaria">
          <i>
            <FaUsersCog />
          </i>
          <li>Secretarias</li>
        </a>
        <a className="linksMenu" href="/postos">
          <i>
            <FaGasPump />
          </i>
          <li>Postos</li>
        </a>
        <a className="linksMenu" href="/carros">
          <i>
            <FaCar />
          </i>
          <li>Carros</li>
        </a>
        <a className="linksMenu" href="/limiteMes">
          <i>
            <FaChartBar />
          </i>
          <li>Limites do mês</li>
        </a>

        <div className="line"></div>

        <a className="linksMenu" href="/cadastros">
          <i>
            <FaUserPlus />
          </i>
          <li>Cadastro</li>
        </a>
        <a className="linksMenu" href="/movimentos">
          <i className="rodar">
            <FaExchangeAlt />
          </i>
          <li>Movimento</li>
        </a>
        <a className="linksMenu" href="/relatorios">
          <i>
            <FaChartLine />
          </i>
          <li>Relatório</li>
        </a>
        <div className="line"></div>
        <a className="linksMenu" href="/config">
          <i>
            <FaCog />
          </i>
          <li>Configurações</li>
        </a>
        <div className="line lineP"></div>
      </ul>
    </nav>
  );
}
}

export default MenuLateral;
