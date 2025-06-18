import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Produto from './pages/Prod'; 
import Home from './pages/Home'; // ✅ Página inicial
import './responsive.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-screen overflow-hidden">
        {/* Fundo escurecido */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75 -z-10"
          style={{
            backgroundImage: "url('/imagens/fundoBuffet.png')",
          }}
        ></div>

        {/* Conteúdo principal */}
        <div className="relative z-10 flex-grow">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> {/* 🔥 Home é a página inicial */}
            <Route path="/produtos" element={<Produto />} /> {/* Página Produtos */}
          </Routes>
        </div>

        {/* Rodapé */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;






