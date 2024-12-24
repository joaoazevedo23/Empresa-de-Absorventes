import React from "react";
import './produtos.scss'; // Importando o SCSS normal
import Prod01 from './../../../assets/Img_Auren05.jpg';
import Prod02 from './../../../assets/Img_Auren06.jpg';
import Prod03 from './../../../assets/Img_Auren07.jpg';
import Prod04 from './../../../assets/Img_Auren08.jpg';

function Produtos() {
    return (
        <div className="container">
            <div className="area_destaque">
                <p className="destaque_txt">
                    Alguns de nossos produtos
                </p>
            </div>

            <div className="produtos_itens">
                <div className="prod">
                    <div className="prod_image_container">
                        <img src={Prod01} alt="Imagem do produto" className="img_prod" />
                    </div>
                    <p className="titulo_prod">Absorvente Auren Super Proteção Com Abas Seca</p>
                    <p className="desc_prod1">Conheça seus benefícios:</p><br />
                    <p className="desc_prod2">
                        <strong>Camada seca:</strong> Mantém a sensação de frescor por mais tempo.<br />
                        <strong>Super proteção:</strong> Ideal para fluxos intensos, garantindo confiança em qualquer momento do dia.<br />
                        <strong>Abas ajustáveis:</strong> Proporcionam fixação segura e liberdade de movimento.<br />
                        <strong>Design ergonômico:</strong> Feito para se adaptar perfeitamente ao seu corpo.<br />
                    </p>
                </div>
                <div className="prod">
                    <div className="prod_image_container">
                        <img src={Prod02} alt="Imagem do produto" className="img_prod" />
                    </div>
                    <p className="titulo_prod">Absorvente Auren Super Proteção Sem Abas Seca</p>
                    <p className="desc_prod1">Conheça seus benefícios:</p><br />
                    <p className="desc_prod2">
                        <strong>Camada seca:</strong> Garante uma sensação de frescor ao longo do dia, mantendo você protegida.<br />
                        <strong>Alta absorção:</strong> Desenvolvido para fluxos moderados a intensos, oferecendo segurança em todos os momentos.<br />
                        <strong>Sem abas:</strong> Perfeito para quem prefere discrição e liberdade de movimento sem comprometer a proteção.<br />
                        <strong>Conforto Superior:</strong> Material macio e respirável que respeita a delicadeza da sua pele.<br />
                    </p>
                </div>
                <div className="prod">
                    <div className="prod_image_container">
                        <img src={Prod03} alt="Imagem do produto" className="img_prod" />
                    </div>
                    <p className="titulo_prod">Absorvente Auren Super Proteção Noturno</p>
                    <p className="desc_prod1">Conheça seus benefícios:</p><br />
                    <p className="desc_prod2" id="prod1">
                        <strong>Cobertura extra longa:</strong> Garante proteção completa em qualquer posição.<br />
                        <strong>Alta absorção:</strong> Ideal para fluxos intensos, mantendo a sensação de frescor durante toda a noite.<br />
                        <strong>Conforto superior:</strong> Material macio que respeita a delicadeza da pele.<br />
                        <strong>Design anatômico:</strong> Adapta-se perfeitamente ao corpo, evitando vazamentos.<br />
                    </p>
                </div>
                <div className="prod">
                    <div className="prod_image_container">
                        <img src={Prod04} alt="Imagem do produto" className="img_prod" />
                    </div>
                    <p className="titulo_prod">Absorvente Auren Super Proteção Suave Interno</p>
                    <p className="desc_prod1">Conheça seus benefícios:</p><br />
                    <p className="desc_prod2">
                        <strong>Absorção superior:</strong> Projetado para fluxos moderados, garantindo máxima proteção sem comprometer o conforto.<br />
                        <strong>Discrição e conforto:</strong> Ideal para quem busca uma solução prática e eficaz para o dia a dia.<br />
                        <strong>Tecnologia suave:</strong> Material macio e delicado com a pele, proporcionando uma sensação de bem-estar.<br />
                        <strong>Proteção interna:</strong> Ideal para quem prefere maior discrição e conforto durante o ciclo.<br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Produtos;
