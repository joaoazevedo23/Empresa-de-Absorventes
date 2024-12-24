import React, { useState, useEffect } from "react";
import './carrossel.scss';
import Img01 from './../../../assets/Produto_Auren01.jpg';
import Img02 from './../../../assets/Produto_Auren02.jpg';
import Img03 from './../../../assets/Produto_Auren03.jpg';
import Img04 from './../../../assets/Img_Mulher01.jpg';

function Carrossel() {
    const images = [Img01, Img02, Img03, Img04];
    const [indiceAtual, setIndiceAtual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndiceAtual((indiceAtual + 1) % images.length);
        }, 3000); // Troca de imagem a cada 3 segundos

        return () => clearInterval(intervalo); // Limpa o intervalo quando o componente é desmontado
    }, [indiceAtual]);

    return (
        <div className="carrossel">
            <img 
                className="img_carrossel" 
                src={images[indiceAtual]} 
                alt={`Slide ${indiceAtual}`} 
            />
        </div>
    );
}

export default Carrossel;
