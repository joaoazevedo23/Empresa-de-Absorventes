import './sfooter.scss'
import React from "react";
import { Link } from 'react-router-dom';

function Footer(){
    return(
            <footer classname="footer">
                    <h2 className="logo_txt">Auren 2024</h2>
                <nav className="nav_footer">
                    <ul className="list_footer">
                        <li><Link to="/" className="pages">Home</Link></li>
                        <li><Link to="/sobre" className="pages">Sobre nós</Link></li>
                        <li><Link to="/forms" className="pages">Entre em Contato</Link></li>
                        <li><a href="https://www.alwaysbrasil.com.br/pt-br/calendario-menstrual" target="_blank" className="pages">Calculadora do ciclo menstrual - Always</a></li>
                    </ul>
                </nav>
                <p className='copy_txt'>Auren © 2024. Todos os direitos reservados.</p>
            </footer>       
    ) 
}
export default Footer
