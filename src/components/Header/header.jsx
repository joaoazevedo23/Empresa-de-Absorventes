import './header.scss';
import React from "react";
import logoAuren from "../../assets/Logo_auren.jpg";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <img src={logoAuren} className="logo_img_hd" alt="Logo da empresa Auren" />
            <nav className="nav_header">
                <ul className="list_header">
                    <li><Link to="/" className="pages_hd">Home</Link></li>
                    <li><Link to="/sobre" className="pages_hd">Sobre nós</Link></li>
                    <li><Link to="/forms" className="pages_hd">Entre em Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
