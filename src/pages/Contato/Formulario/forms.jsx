import './forms.scss';
import React from 'react';

function Forms() {
    return (
        <div className="content_frm">
            <h2 className="subt_txt_frm">Formulário</h2>
            <form className="forms_frm" action="http://localhost/Empresa-de-absorventes/src/forms.php" method='POST'>
                <div className="linha">
                    <label>Nome:</label>
                    <input type="text" id="nome" name="nome" class="inputs" placeholder='Digite seu Nome' required />
                </div>
                <div className="linha">
                    <label>Email:</label>
                    <input type="email" id="email" name="email" class="inputs" placeholder='Ex: teste@teste.com' required />
                </div>
                <div className="linha">
                    <label>Telefone:</label>
                    <input type="text" id="tel" name="telefone" class="inputs" placeholder='(xx) xxxxx - xxxx' required />
                </div>
                <div className="linha">
                    <label>Endereço:</label>
                    <input type="text" id="end" name="endereco" class="inputs" placeholder='Digite seu Endereço' required/>
                </div>
                <p>Quais absorventes você mais utiliza?</p>
                <div className="opcoes">
                    <div className="checkbox_op">
                        <input type="checkbox" id="D" name="op1" value="Diurno" class="inputs" />
                        <label htmlFor="D">Diurno</label>
                    </div>
                    <div className="checkbox_op">
                        <input type="checkbox" id="N" name="op2" value="Noturno" class="inputs" />
                        <label htmlFor="N">Noturno</label>
                    </div>
                    <div className="checkbox_op">
                        <input type="checkbox" id="In" name="op3" value="Interno" class="inputs" />
                        <label htmlFor="In">Interno</label>
                    </div>
                </div>
                <p>Nos de sua opinião sobre nosso trabalho!</p>
                <textarea name="sugestao" id="sugest_txtarea" class="inputs" placeholder='Escreva uma mensagem para nós!'></textarea>
                <br />
                <button className='btn' type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Forms;
