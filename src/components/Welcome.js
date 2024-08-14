import React, { useEffect, useState } from "react"; // Adicionado o useState aqui
import { useLocation } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {

    const location = useLocation();
    const { userName } = location.state || { userName: 'Visitante' };

    return(
        < >
            <main>
                <div className="container-cumprimento">
                    <div className="all-titulos-cumprimento">
                        <h1 className="titulo-cumprimento">Seja bem-vindo {userName}!</h1>
                        <h2 className="subtitulo-cumprimento">Inovação e funcionalidade em cada linha de código.</h2>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Welcome;