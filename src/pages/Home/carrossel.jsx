import React, { useState, useEffect } from "react";
import './styles.scss'

function Carrossel() {
    const imagens = [
        "https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAO3UTZKb24tsTSkhjfpwmrVJFIGQbuA5uLg&s",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggZO2v6mkBpPhv6AJ2rWwxBEJsJsz9dZd_igN54ZGhE8GQbSwnNYFXgQSGpreHK2OiXpNyx0Gp_DmL9_L23TNSPRrxFhx9WEMkkw-Sp0mZ96h3CAP_L5atBoXMe6Q24vwxWVOmbnTwmasU/s1600/adffb142a07755f9fc4e1400e3491ae32.jpg"
    ];

    const [indiceAtual, setIndiceAtual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndiceAtual((indiceAtual + 1) % imagens.length);
        }, 3000); // Troca de imagem a cada 3 segundos

        return () => clearInterval(intervalo); // Limpa o intervalo quando o componente é desmontado
    }, [indiceAtual]);

    return (
        <div style={{ textAlign: "center", position: "relative", maxWidth: "500px", margin: "auto" }}>
            <img
                src={imagens[indiceAtual]}
                alt={`Slide ${indiceAtual}`}
                style={{ width: "100%", borderRadius: "10px" }}
            />
        </div>
    );
}

export default Carrossel