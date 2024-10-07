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
                    <h1 className="titulo-cumprimento">Seja bem-vindo ao meu <span className="palavra-cumprimento">Portfolio</span> {userName}!</h1>
                    <h2 className="subtitulo-cumprimento">Criando o futuro em cada linha de código.</h2>

                    <button type="button" className="btn btn-outline-danger btn-cumprimento" data-bs-toggle="modal" data-bs-target="#exampleModal">Currículo</button>
                </div>
            </section>

            <section className="conteudo-sobre-mim" id="sobre-mim">
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1f1f1f" fill-opacity="1" d="M0,64L60,96C120,128,240,192,360,218.7C480,245,600,235,720,192C840,149,960,75,1080,48C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                <div className="sobre-mim">
                <h1 className="titulo-sobre-mim">Olá, sou o <span className="palavra-sobre-mim">Julio</span>!</h1>

                    <div className="columns">
                        <div className="texto-sobre-mim">
                        <i class="fa-solid fa-code" /> 
                        Crio interfaces web intuitivas e responsivas, trabalhando com bibliotecas e APIs modernas. <br /><br />
                        <i class="fa-solid fa-book" /> 
                        Sou técnico em Desenvolvimento de Sistemas pela ETEC e estou cursando graduação em Análise e Desenvolvimento de Sistemas na Uninove.<br /><br />
                        <i class="fa-solid fa-rocket teste"/> 
                        Atuo como freelancer desenvolvendo interfaces web e estou em busca de uma oportunidade no mercado de trabalho na área de programação front-end.
                        </div>
                        <div className="imagem-sobre-mim">
                            <img src="/foto_portfolio.jpg"></img>
                        </div>
                    </div>

                </div>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1f1f1f" fill-opacity="1" d="M0,64L60,96C120,128,240,192,360,218.7C480,245,600,235,720,192C840,149,960,75,1080,48C1200,21,1320,43,1380,53.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            </section>

            <section className="conteudo-portfolio">
                <div className="interface">
                    
                </div>
            </section>

            <section className="conteudo-contato" id="contato">
                <div className="contato">
                    <form className="form-contato">
                        <fieldset>
                            <h1 className="titulo-contato">Entre em contato pelo <span className="palavra-contato">Whatsapp</span> :</h1>

                            <p>
                                <label for="name" className="label-contato">Seu <span className="palavra-contato">Nome</span>:</label>
                                <input type="name" className="input-contato" placeholder="Nome" id="name"/>                            
                            </p>

                            <p>
                                <label for="email" className="label-contato">Seu <span className="palavra-contato">Email</span>:</label>
                                <input type="email" placeholder="Email" className="input-contato" id="email" aria-describedby="emailHelp"/>                            
                            </p>

                            <p>
                                <label for="text" className="label-contato">Tipo de serviço de <span className="palavra-contato">front-end</span> desejado:</label>
                                <input type="text" placeholder="Serviço" className="input-contato" aria-label="Server" id="text"/>
                            </p>

                            <div className="btn-whats">
                                <button type="button" className="btn btn-outline-danger">Enviar mensagem</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Welcome;
