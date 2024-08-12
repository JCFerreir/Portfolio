import React, { useEffect, useState } from "react"; // Adicionado o useState aqui
import { useLocation } from 'react-router-dom';

const Welcome = () => {

    const location = useLocation();
    const { userName } = location.state || { userName: 'Visitante' };

    return(
        <>
            <div>
                <h1>Bem-vindo, {userName}!</h1>
            </div>
        </>
    );
};

export default Welcome;