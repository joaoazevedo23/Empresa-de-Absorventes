import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home.jsx';
import Sobre from './pages/Sobre/sobre.jsx';
import Contato from './pages/Contato/contato.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App /> 
  </StrictMode>,
)

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </Router>
    );
}

export default App;