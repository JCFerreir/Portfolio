import React from "react";
import { useLocation } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
    const location = useLocation();
    const { userName } = location.state || { userName: 'Visitante' };

    return (
        <main>

            <div className="modal fade custom-backdrop" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img src="/CV-portfolio.jpg" alt="Example" className="img-fluid img-cv" />
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-cumprimento">
                <div className="imagem-cumprimento">
                    <a href="#">
                        <img src="/foto-portfolio2.jpg" alt="Portfólio" />
                    </a>
                </div>

                <div className="all-titulos-cumprimento">
                    <h1 className="titulo-cumprimento">Seja bem-vindo ao meu Portfolio {userName}!</h1>
                    <h2 className="subtitulo-cumprimento">Criando o futuro em cada linha de código.</h2>

                    <button type="button" className="btn btn-outline-danger btn-cumprimento" data-bs-toggle="modal" data-bs-target="#exampleModal">Curriculo</button>
                </div>
            </div>
        </main>
    );
};

export default Welcome;
