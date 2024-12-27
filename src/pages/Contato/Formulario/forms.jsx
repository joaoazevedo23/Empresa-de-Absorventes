import './forms.scss';
import React from 'react';

function Forms() {
    return (
                <div className="content_frm">
                    <h2 className="subt_txt_frm">Formulário</h2>
                    <form className="forms_frm">
                        <div className="linha">
                            <label>Nome:</label>
                            <input type="text" id="nome" class="inputs" placeholder='Digite seu Nome'/>
                            <span className='span-req'>Nome deve ter no mínimo 3 caracteres</span>
                        </div>
                        
                        <div className="linha">
                            <label  >Email:</label>
                            <input type="email" id="email" class="inputs" placeholder='Digite seu Email' />
                            <span className='span-req'>Digite um email válido</span>
                        </div>
                        
                        <div className="linha">
                            <label  >Telefone:</label>
                            <input type="text" id="tel" class="inputs" placeholder='Digite seu Telefone' />
                        </div>
                        
                        <div className="linha">
                            <label  >Endereço:</label>
                            <input type="text" id="end" class="inputs" placeholder='Digite seu Endereço' />
                            <span className='span-req'>O endereço deve ter no mínimo 10 caracteres</span>
                        </div>
                       
                        <div className="opcoes">
                        <label  >Qual tipo de absorvente você mais utiliza?</label>
                        <div className="checkbox_op">
                            <label for="D">Diurno:</label>
                            <input type="checkbox" id="D" class="inputs" placeholder='Escreva uma mensagem para nós!' />
                        </div>

                        <div className="checkbox_op">
                            <label for="N">Noturno:</label>
                            <input type="checkbox" id="N" class="inputs" placeholder='Escreva uma mensagem para nós!' />
                        </div>

                        <div className="checkbox_op">
                            <label for="In">Interno:</label>
                            <input type="checkbox" id="In" class="inputs" placeholder='Escreva uma mensagem para nós!' />
                        </div>
                        </div>

                        <p>Nos de sua sugestão</p>
                        <textarea name="sugest_txtarea" id="sugest_txtarea" class="inputs" placeholder='Escreva uma mensagem para nós!'></textarea>
                        
                        <button className='btn' type='submit'>Enviar</button>
                    </form>
                </div>
    );
}

export default Forms;
