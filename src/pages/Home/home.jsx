import './styles.scss'
import React from "react";
import Carrossel from './carrossel';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Prod01 from './../../assets/Img_Auren05.jpg'
import Prod02 from './../../assets/Img_Auren06.jpg'
import Prod03 from './../../assets/Img_Auren07.jpg'
import Prod04 from './../../assets/Img_Auren08.jpg'

function Home() {
    return (
        <div className="container">
            <Header />
            <br />
            <Carrossel />
            <center><h2 className="titulo">Auren, com você de dia e de noite</h2></center>
        {/* <div className="area_expl">
                <h2 className='titulo'>Alguma coisa útil que ainda estou pensando</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro sit modi corporis rerum voluptas consectetur sint dicta adipisci dolorem, placeat cum repudiandae culpa, id temporibus nesciunt totam autem. Dignissimos, quod. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae magnam deleniti dignissimos iusto ipsam harum qui eos, maxime dolores, voluptatum, at ad est iste inventore delectus tempore blanditiis nulla id! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quae eveniet amet, numquam est quod quidem hic sunt, quo molestias, qui natus magni necessitatibus? Ea debitis laudantium eaque laboriosam possimus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam saepe ex, tempora corrupti a suscipit neque, laborum quia, vel provident eaque magnam doloribus. Officia nostrum facere explicabo aut! Obcaecati, error?</p>
            </div> */}
            <div className="area_txt01">
                <p className="produtos">
                    Nossos produtos
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
