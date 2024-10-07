import React, { useEffect, useRef } from "react";
import './Header-portfolio.css';

const Header = () => {
  // Criando referências para os elementos
  const btnMenuRef = useRef(null);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  // useEffect para garantir que o código seja executado após o DOM ser montado
  useEffect(() => {
    const btnMenu = btnMenuRef.current;
    const menu = menuRef.current;
    const overlay = overlayRef.current;

    const openMenu = () => {
      menu.classList.add('abrir-menu');
    };

    const closeMenu = () => {
      menu.classList.remove('abrir-menu');
    };

    btnMenu.addEventListener('click', openMenu);
    menu.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Cleanup ao desmontar o componente para evitar vazamento de memória
    return () => {
      btnMenu.removeEventListener('click', openMenu);
      menu.removeEventListener('click', closeMenu);
      overlay.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <>
      <header id="header">
        <div className="interface">
          <div className="logo">
            <a href="/"> 
              <img src="/logo-portfolio.png" alt="Logo" />
            </a>
          </div>

          <nav className="menu-desktop">
            <ul>
              <li><a href="#sobre-mim">Sobre mim</a></li>
              <li><a href="#teste">Teste</a></li>
              <li><a href="#contato">Entre em contato</a></li>
            </ul>
          </nav>

          <div className="btn-contato">
            <a href="#">
              <button>Entre em Contato</button>
            </a>
          </div>

          <div className="btn-abrir-menu" id="btn-menu" ref={btnMenuRef}>
            <i className="fa-solid fa-list-ul"></i>
          </div>

          <div className="menu-mobile" id="menu-mobile" ref={menuRef}>
            <div className="btn-fechar">
              <i className="fa-solid fa-x"></i>
            </div>

            <nav>
              <ul>
                <li><a href="#sobre-mim">Sobre mim</a></li>
                <li><a href="#teste">Teste</a></li>
                <li><a href="#teste">Teste</a></li>
                <li><a href="#contato">Entre em contato</a></li>
              </ul>
            </nav>
          </div>

          <div className="overlay-menu" id="overlay-menu" ref={overlayRef}></div>
        </div>
      </header>
    </>
  );
};

export default Header;
