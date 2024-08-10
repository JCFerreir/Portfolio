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

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Header;