import './sheader.scss'
import React from "react";
import logoAuren from "../../assets/Logo_auren.jpg";
import { Link } from 'react-router-dom';

function Header(){
    return(
            <header classname="header">
                <div className="logo_header">
                    <img src={logoAuren} className="logo_img" alt="Logo da empresa Auren"/>
                </div>
                <nav className="nav_header">
                    <ul className="list_header">
                        <li><Link to="/" className="pages">Home</Link></li>
                        <li><Link to="/sobre" className="pages">Sobre nós</Link></li>
                        <li><Link to="/forms" className="pages">Entre em Contato</Link></li>
                    </ul>
                </nav>
            </header>       
    ) 
}
export default Header
