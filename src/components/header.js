import React, { Component, useState, useEffect } from "react";
import imgSemFoto from "../image/semfoto.jpg";
import Logo from "../image/logopref.png";
import { BsList } from "react-icons/bs";

import {
    FaAngleDown,
    FaCogs,
    FaSignOutAlt,
    FaRegEdit
  } from "react-icons/fa";
 
  



  class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: false,
        pessoa: "Eduardo",
        dataAtual: this.getCurrentDate()
      };
      this.handleEvent = this.handleEvent.bind(this);
    }
  
    getCurrentDate() {
      const data = new Date();
      const dia = String(data.getDate()).padStart(2, "0");
      const mes = String(data.getMonth() + 1).padStart(2, "0");
      const ano = data.getFullYear();
      return `${dia}/${mes}/${ano}`;
    }
  
    componentDidMount() {
        this.mostra = document.getElementById("lateral");
        this.element = document.getElementById("esconder");
        if (this.element) {
          this.element.addEventListener("click", this.handleEvent);
        }
      }
  
    componentWillUnmount() {
      this.element.removeEventListener("click", this.handleEvent);
    }
  
    handleEvent() {
      this.mostra.classList.toggle("show");
    }
  
    render() {
      return  (
        <header className="HeaderMenu">
          {/* menu hamburger */}
          <div id="esconder" className="contHamburger">
            <BsList className="iconHamburger" />
          </div>
          <div className="contHeader">
            <img className="imageLogo" src={Logo} alt="imglogoMinni" />
            <p className="dataBoasVindas">
              Bem vindo {this.state.pessoa} Hoje é {this.state.dataAtual}
            </p>
          </div>
  
          <div className="contRight" onClick={() => this.setState({ visible: !this.state.visible })}>
            <div className="flexFoto">
              <div className="lineH"></div>
              <p>
                {this.state.pessoa}
                <i id="openCloseHeader">
                  <FaAngleDown />
                </i>
              </p>
              <img className="imgHeader" src={imgSemFoto} alt="imglogoMinni" />
            </div>
            {/* menu header */}
            <div
              className="floatRight"
              style={{ display: this.state.visible ? "block" : "none" }}
            >
              <ul className="listHeader">
                <a href="/perfil">
                <li className="itensListHeader">
                  <i>
                    <FaCogs />
                  </i>
                  Perfil
                </li>
                </a>
                
                <a href="./senha">
                <li className="itensListHeader">
                  <i>
                    <FaRegEdit />
                  </i>
                  Alterar Senha
                </li>
                </a>

                <a href="/login">
                <li className="itensListHeader">
                  <i>
                    <FaSignOutAlt />
                  </i>
                  Sair
                </li>
                </a>
              </ul>
            </div>
          </div>
        </header>
      );
    }
  }
  
  export default Header;
  
