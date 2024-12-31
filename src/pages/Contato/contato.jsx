import './contato.scss';
import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Forms from './Formulario/forms';

function Contato() {
    return (
        <div className="container">
            <Header />
            <div className="area_destaque_frm">
                <p className="titulo_txt_frm">Entre em contato conosco!</p>
            </div>
            <div className="area_frm">
                <div className="area_txt_frm">
                    <h2 className="subt_txt">Converse conosco</h2>
                    <br />
                    <p>
                        Na Auren, acreditamos que a melhor forma de evoluir é ouvindo você! Estamos aqui para esclarecer suas dúvidas, receber sugestões e ajudar no que for necessário.<br /><br />

                        <strong>💌 E-mail:</strong> contato@aurenfic.com.br<br />
                        <strong> 📞 Telefone:</strong> 0800 123 4567 (Atendimento de segunda a sexta, das 8h às 18h)<br />
                        <strong> 📱 Redes sociais:</strong> Encontre-nos no Instagram, Facebook e Twitter em <strong>@aurenoficialfic</strong><br /><br />

                        Ou preencha o formulário e nossa equipe retornará o mais breve possível.<br />

                        Cuidar de você é nossa prioridade. 💜<br />
                        <strong>Auren – Conforto e proteção que acompanham você todos os dias.</strong>
                    </p>
                </div>
                <Forms />
            </div>
            <Footer />
        </div>
    );
}

export default Contato;
