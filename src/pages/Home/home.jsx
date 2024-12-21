import './shome.scss'
import React from "react";
import Carrossel from './carrossel';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Prod01 from './../../assets/Img_Auren05.jpg'
import Prod02 from './../../assets/Img_Auren06.jpg'
import Prod03 from './../../assets/Img_Auren07.jpg'
import Prod04 from './../../assets/Img_Auren08.jpg'
import ImgBeneficios from './../../assets/Logo_auren_alt2.jpg'

function Home() {
    return (
        <div className="container">
            <Header />
            <br />
            <Carrossel />
            <center><h2 className="titulo">Auren, com você de dia e de noite</h2></center>

            <div className="area_destaque">
                <h2 className="sub_txt">Destaques e benefícios</h2>
            </div>
            <div className="area_beneficios">
                <div className="txt_beneficios">

                    <h3 className='sub02_txt'>Conforto e Proteção, Todos os Dias</h3><br />
                    <p>  <strong> Por que escolher Auren?</strong><br />
                        Auren é mais do que uma marca; é um compromisso com você e com o planeta. Nossos produtos são projetados para oferecer o melhor em conforto, sustentabilidade e inovação, garantindo que cada detalhe contribua para uma experiência única.<br /><br />
                        <strong> Sustentabilidade em primeiro lugar</strong><br />
                        Cuidar do meio ambiente é uma prioridade. Utilizamos materiais biodegradáveis e processos de fabricação responsáveis, reduzindo o impacto ambiental e ajudando a construir um futuro mais verde para as próximas gerações.<br /><br />
                        <strong> Conforto incomparável</strong><br />
                        Com tecnologia de ponta, nossos absorventes são criados para se adaptar perfeitamente ao seu corpo, proporcionando liberdade de movimento e bem-estar durante todo o dia. Auren é sinônimo de leveza e proteção.<br /><br />
                        <strong> Uma experiência única</strong><br />
                        Auren transforma o cuidado feminino em algo extraordinário. Combinamos elegância, eficiência e inovação para oferecer produtos que vão além do básico. Escolher Auren é optar por uma experiência que valoriza cada momento do seu dia.<br /><br />
                        Escolha Auren e sinta a diferença de um produto feito para você.<br />
                    </p>
                </div>
                <img src={ImgBeneficios} className='img_ben' />
            </div>

            <div className="area_destaque">
                <p className="sub_txt">
                    Alguns de nossos produtos
                </p>
            </div>

            <div className="produtos_itens">
                <div className="prod">
                    <div className="prod_image-container">
                        <img src={Prod01} alt="Imagem do produto" className="img_prod" />
                    </div>
                    <p className="titulo_prod">Absorvente Auren Super Proteção Com Abas Seca</p>
                    <button className='btn_prod'>Saiba mais</button>
                </div>
                <div className="prod">
                    <div className="prod_image-container">
                        <img src={Prod02} alt="Imagem do produto" className="img_prod" />
                    </div>
                    <p className="titulo_prod">Absorvente Auren Super Proteção Sem Abas Seca</p>
                    <button className='btn_prod'>Saiba mais</button>
                </div>
                <div className="prod">
                    <div className="prod_image-container">
                        <img src={Prod03} alt="Imagem do produto" className="img_prod" />
                    </div>
                    <p className="titulo_prod">Absorvente Auren Super Proteção Sem Abas Suave</p>
                    <button className='btn_prod'>Saiba mais</button>
                </div>
                <div className="prod">
                    <div className="prod_image-container">
                        <img src={Prod04} alt="Imagem do produto" className="img_prod" />
                    </div>
                    <p className="titulo_prod">Absorvente Auren Super Proteção Com Abas Suave</p>
                    <button className='btn_prod'>Saiba mais</button>
                </div>
            </div>
            <Footer />
        </div>

    )
}
export default Home
