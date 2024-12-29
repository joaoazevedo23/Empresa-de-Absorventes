import './forms.scss';
import React from 'react';

function Forms() {
    return (
        <div className="content_frm">
            <h2 className="subt_txt_frm">Formulário</h2>
            <form className="forms_frm">
                <div className="linha">
                    <label>Nome:</label>
                    <input type="text" id="nome" class="inputs" placeholder='Digite seu Nome' />
                </div>

                <div className="linha">
                    <label  >Email:</label>
                    <input type="email" id="email" class="inputs" placeholder='Digite seu Email' />
                </div>

                <div className="linha">
                    <label  >Telefone:</label>
                    <input type="text" id="tel" class="inputs" placeholder='Digite seu Telefone' />
                </div>

                <div className="linha">
                    <label  >Endereço:</label>
                    <input type="text" id="end" class="inputs" placeholder='Digite seu Endereço' />
                </div>


                <p>Qual tipo de absorvente você mais utiliza?</p>
                <div className="opcoes">
                    <div className="checkbox_op">
                        <input type="checkbox" id="D" class="inputs" placeholder='Escreva uma mensagem para nós!' />
                        <label for="D">Diurno</label>
                    </div>

                    <div className="checkbox_op">
                        <input type="checkbox" id="N" class="inputs" placeholder='Escreva uma mensagem para nós!' />
                        <label for="N">Noturno</label>
                    </div>

                    <div className="checkbox_op">
                        <input type="checkbox" id="In" class="inputs" placeholder='Escreva uma mensagem para nós!' />
                        <label for="In">Interno</label>
                    </div>
                </div>

                <p>Nos de sua opinião sobre nosso trabalho!</p>
                <textarea name="sugest_txtarea" id="sugest_txtarea" class="inputs" placeholder='Escreva uma mensagem para nós!'></textarea>
                <br />
                <button className='btn'>Enviar</button>
            </form>
        </div>
    );
}

export default Forms;
