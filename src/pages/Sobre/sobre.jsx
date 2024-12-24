import React from 'react';
import './sobre.scss';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Img01 from '../../assets/Img_Emp_Auren01.jpg';

function Sobre() {
    return (
        <div className="container">
            <Header />
            <div className="area_cdestaque">
                <p className="titulo_txt">Sobre a Auren</p>
            </div>
            <div className="area">
                <div className="area_txt">
                    <h2 className="sub_txt">Quem Somos</h2>
                    <p>
                        Somos uma empresa dedicada ao bem-estar e conforto feminino, oferecendo absorventes
                        de alta qualidade que unem inovação e sustentabilidade. Nossa história começou com
                        um objetivo claro: transformar a experiência das mulheres, cuidando do corpo e do
                        planeta.
                    </p><br />

                    <h2 className="sub_txt">Missão e Valores</h2>
                    <p>
                        <strong>Missão:</strong> Oferecer produtos de alta qualidade que promovam conforto e saúde,
                        respeitando o meio ambiente.
                    </p>
                    <p>
                        <strong>Valores:</strong> Sustentabilidade, inovação, inclusão e compromisso com o bem-estar
                        feminino.
                    </p><br />
                    <h2 className="sub_txt">Sustentabilidade</h2>
                    <p>
                        Nossos absorventes são feitos com materiais biodegradáveis e nossos processos
                        de fabricação são projetados para minimizar o impacto ambiental. Estamos
                        comprometidos em fazer a diferença para o planeta e para as futuras gerações.
                    </p><br />
                    <h2 className="sub_txt">Conheça nossa Equipe</h2>
                    <p>
                        Nossa equipe é formada por especialistas apaixonados em criar soluções que
                        realmente fazem a diferença na vida das mulheres.
                    </p>
                </div>
                <img src={Img01} className="img_img" alt="Sobre Auren" />
            </div>
            <Footer />
        </div>
    );
}

export default Sobre;
