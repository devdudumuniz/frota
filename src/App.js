import React, { useState, useEffect } from "react";
import HeaderMenu from "./components/header";
import MenuLateral from "./components/MenuLateral";
import RotasPages from "./routs/RotasPages";

function App() {
//função para hide show menu lateral
  let mostra = document.getElementById('lateral');
  function handleEvent() {
    mostra.classList.toggle('show');
  }
  useEffect(() => {
    const element = document.getElementById('esconder');
    element.addEventListener('click', handleEvent);

    return () => {
      element.removeEventListener('click', handleEvent);
    };
  }, []);

      return (
        <div className="flex">
          {/* include menu lateral */}
          <MenuLateral></MenuLateral>
          <div className="body">
            <HeaderMenu></HeaderMenu>
            <div className="corpo" id="corpo">
            <RotasPages/>
            </div>
          </div>
        </div>
    );
}
export default App;