import React from "react";
import './Header-portfolio.css'

const Header = () => {
  return (
    <>
      <header>
        <div className="interface">
            <div className="logo">
              <a href=""> <img src="/logo-portfolio.png" /></a>
            </div>

        <nav className="menu-desktop">
            <ul>
              <li><a href="teste">Teste</a></li>
              <li><a href="teste">Teste</a></li>
              <li><a href="teste">Teste</a></li>
            </ul>
        </nav>

        <div className="btn-contato"> 
          <a href="">
            <button  data-bs-toggle="modal" data-bs-target="#exampleModal">Contato</button>
          </a>
        </div>
      </div>
      </header>
    </>
  );
};

export default Header;