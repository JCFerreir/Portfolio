import React, { useEffect, useState } from "react"; // Adicionado o useState aqui
import './Main-começo.css';
import ScrollReveal from 'scrollreveal';
import { useNavigate } from "react-router-dom";

const MainComeço = () => {
    // Comando para pegar o nome do usuário
    const [name, setName] = useState(''); // Agora o useState está corretamente importado
    const navigate = useNavigate();

    const handleConfirm = () => {
        if (name) {
            navigate('/welcome', { state: { userName: name } });
        }
    };

    // Comando para usar os efeitos do ScrollReveal
    useEffect(() => {
        const revelar = ScrollReveal({ reset: true });

        revelar.reveal('.conteudo-main-começo', {
            duration: 1000,
            distance: '90px',
            delay: 500,
            origin: 'bottom'
        });
        revelar.reveal('.titulo-começo', {
            duration: 1000,
            distance: '90px',
            delay: 500,
            origin: 'left'
        });
    }, []); // O array vazio garante que o efeito só será executado após a montagem do componente

    return (
        <main>
            <div className="container-main-começo">
                <h1 className="titulo-começo">Para uma imersão melhor...</h1>

                <div className="conteudo-main-começo">
                    <label className="label-começo">Digite seu nome:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nome" 
                        aria-label="Username" 
                        aria-describedby="basic-addon1" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button 
                        type="button" 
                        className="btn btn-outline-danger btn-começo" 
                        onClick={handleConfirm}>
                        Confirmar
                    </button>
                </div>
            </div>
        </main>
    );
};

export default MainComeço;
