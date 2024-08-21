import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import './Welcome.css';
import ScrollReveal from 'scrollreveal';

const Welcome = () => {
    const location = useLocation();
    const { userName } = location.state || { userName: 'Visitante' };

    // Comando para usar os efeitos do ScrollReveal
    useEffect(() => {
        const revelar = ScrollReveal({ reset: true });

        revelar.reveal('.imagem-cumprimento', {
            duration: 1000,
            distance: '90px',
            delay: 500,
            origin: 'left'
        });
        revelar.reveal('.all-titulos-cumprimento', {
            duration: 1000,
            distance: '90px',
            delay: 500,
            origin: 'right'
        });
    }, []); // O array vazio garante que o efeito só será executado após a montagem do componente

    return (
        <main>

            <div className="modal fade custom-backdrop" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">

                            <img src="/CV-portfolio.jpg" alt="Example" className="img-fluid img-cv" />

                                <div className="descricao-modal-footer">
                                    Baixe aqui o CV:
                                </div>
                                <a href="/CV-Julio.pdf" download="CV-Julio.pdf">
                                    <button type="button" className="btn btn-outline-danger btn-cumprimento">Baixar CV</button>
                                </a>
                        </div>
                    </div>
                </div>
            </div>

            <section className="container-cumprimento">
                <div className="imagem-cumprimento">
                    <a href="/welcome">
                        <img src="/logo-portfolio.png" alt="Portfólio" />
                    </a>
                </div>

                <div className="all-titulos-cumprimento">
                    <h1 className="titulo-cumprimento">Seja bem-vindo ao meu Portfolio {userName}!</h1>
                    <h2 className="subtitulo-cumprimento">Criando o futuro em cada linha de código.</h2>

                    <button type="button" className="btn btn-outline-danger btn-cumprimento" data-bs-toggle="modal" data-bs-target="#exampleModal">Currículo</button>
                </div>
            </section>

            <section className="about-me">
                
            </section>
        </main>
    );
};

export default Welcome;
