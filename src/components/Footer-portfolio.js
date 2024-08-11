import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer-portfolio.css';

const Footer = () => {
    return(
        <>
            <footer>
                <div className="container">
                    <div className="direitos">
                        <a>JCF Dev © 2024</a>
                    </div>

                    <nav className="redes-sociais">
                        <ul>
                            <li><a href="https://api.whatsapp.com/send/?phone=5511951526585&text&type=phone_number&app_absent=0"><i class="fa-brands fa-whatsapp"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/julio-cesar-ferreira-93584a261/"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li><a><i class="fa-regular fa-envelope"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </>
    );
};

export default Footer;