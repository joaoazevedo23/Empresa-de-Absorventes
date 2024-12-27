import './forms.scss';
import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

function Forms() {
    return (
        <div className="container">
            <Header />
            <div className="area_destaque_frm">
                <p className="titulo_txt_frm">Entre em contato conosco!</p>
            </div>
            <div className="area_frm">
                <div className="area_txt_frm">
                    <h2 className="subt_txt_frm">Converse conosco</h2>
                    <br/>
                    <p>
                        Na Auren, acreditamos que a melhor forma de evoluir é ouvindo você! Estamos aqui para esclarecer suas dúvidas, receber sugestões e ajudar no que for necessário.<br /><br />

                        <strong>💌 E-mail:</strong> contato@auren.com.br<br />
                        <strong> 📞 Telefone:</strong> 0800 123 4567 (Atendimento de segunda a sexta, das 8h às 18h)<br />
                        <strong> 📱 Redes sociais:</strong> Encontre-nos no Instagram, Facebook e Twitter em <strong>@aurenoficialfic</strong><br /><br />

                        Ou preencha o formulário e nossa equipe retornará o mais breve possível.<br />

                        Cuidar de você é nossa prioridade. 💜<br />
                        <strong>Auren – Conforto e proteção que acompanham você todos os dias.</strong>
                    </p>
                </div>
                <div className="forms_frm">
                    <h2 className="subt_txt_frm">Formulário</h2>
                    <form className="caixa_frm">
                        <div className="linha">
                            <label  >Nome:</label>
                            <input type="text" id="nome" class="input" placeholder='Digite seu Nome' />
                        </div>
                        <br/>
                        <div className="linha">
                            <label  >Email:</label>
                            <input type="email" id="email" class="input" placeholder='Digite seu Email' />
                        </div>
                        <br/>
                        <div className="linha">
                            <label  >Telefone:</label>
                            <input type="text" id="tel" class="input" placeholder='Digite seu Telefone' />
                        </div>
                        <br/>
                        <div className="linha">
                            <label  >Endereço:</label>
                            <input type="text" id="end" class="input" placeholder='Digite seu Endereço' />
                        </div>
                        <br/>
                        <div className="opcoes">
                        <label  >Qual tipo de absorvente você mais utiliza?</label>
                        <div className="checkbox_op">
                            <label  >Diurno:</label>
                            <input type="checkbox" id="sug" class="input" placeholder='Escreva uma mensagem para nós!' />
                        </div>
                        <div className="radio_op">
                            <label  >Noturno:</label>
                            <input type="checkbox" id="sug" class="input" placeholder='Escreva uma mensagem para nós!' />
                        </div>
                        <div className="radio_op">
                            <label >Interno:</label>
                            <input type="checkbox" id="sug" class="input" placeholder='Escreva uma mensagem para nós!' />
                        </div>
                        </div>
                        <br/>
                        <div className="linha">
                            <label  >Sugestões:</label>
                            <input type="text" id="sug" class="input" placeholder='Escreva uma mensagem para nós!' />
                        </div>
                        <br/>
                        <button className='btn'>Enviar</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Forms;
