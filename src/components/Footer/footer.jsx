import './footer.scss';
import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <h2 className="logo_txt_ft">Auren 2024</h2>
            <nav className="nav_footer">
                <ul className="list_footer">
                    <li><Link to="/" className="pages_ft">Home</Link></li>
                    <li><Link to="/sobre" className="pages_ft">Sobre nós</Link></li>
                    <li><Link to="/contato" className="pages_ft">Entre em Contato</Link></li>
                </ul>
            </nav>
            <p className="copy_txt_ft">Auren © 2024. Todos os direitos reservados.</p>
        </footer>
    );
}

export default Footer;
