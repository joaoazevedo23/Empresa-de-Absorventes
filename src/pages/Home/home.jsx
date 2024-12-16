import './styles.scss'
import React, { useState, useEffect } from "react";
import Carrossel from './carrossel';
import Header from '../../components/Header/header';

function Home(){
    return(
        <div className="container">
            <Header/>
            <h1 className="titulo">Auren, com você de dia e de noite</h1>
            <Carrossel/>
        </div>
        
    ) 
}
export default Home
