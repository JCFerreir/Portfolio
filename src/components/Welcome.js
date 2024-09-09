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
        revelar.reveal('.titulo-sobre-mim', {
            duration: 1000,
            distance: '90px',
            delay: 500,
            origin: 'left'
        });
        revelar.reveal('.texto-sobre-mim', {
            duration: 1000,
            distance: '90px',
            delay: 800,
            origin: 'left'
        });
        revelar.reveal('.imagem-sobre-mim', {
            duration: 1000,
            distance: '90px',
            delay: 1000,
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

            <section className="sobre-mim" id="sobre-mim">
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1f1f1f" fill-opacity="1" d="M0,64L60,96C120,128,240,192,360,218.7C480,245,600,235,720,192C840,149,960,75,1080,48C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                <div className="conteudo-sobre-mim">
                <h1 className="titulo-sobre-mim">Olá, sou o Julio!</h1>

                    <div className="columns">
                        <div className="texto-sobre-mim">
                            Um programador front-end especializado 
                                em desenvolvimento de interfaces intuitivas e 
                                responsivas. Busco constantemente aprimorar 
                                minhas habilidades para criar soluções web de 
                                alta qualidade, com foco em desempenho e 
                                usabilidade.
                        </div>
                        <div className="imagem-sobre-mim">
                            <img src="/foto-para-portfolio-03_09.jpg"></img>
                        </div>
                    </div>

                </div>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1f1f1f" fill-opacity="1" d="M0,64L60,96C120,128,240,192,360,218.7C480,245,600,235,720,192C840,149,960,75,1080,48C1200,21,1320,43,1380,53.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            </section>
        </main>
    );
};

export default Welcome;
