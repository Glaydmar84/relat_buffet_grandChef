import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';
import { navLinks, navActions } from '../data/navData';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleAction = (action) => {
    if (action === 'login') setIsLoginOpen(true);
    if (action === 'register') setIsRegisterOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <nav className="mt-4 flex items-center justify-between px-6 py-4 bg-gray-800 bg-opacity-70">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/imagens/logo1.png"
          alt="Logo"
          className="absolute h-36 mt-2 w-auto object-contain -ml-6 sm:h-32 md:h-28"
        />
      </div>

      {/* Título centralizado */}
      <div className="flex-1 ml-20 text-center">
        <span className="text-2xl text-center text-gold font-comfortaa">
          Buffet Grand Chef
        </span>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex items-center space-x-6 mr-4">
        {/* Link para Home (se não estiver na Home) */}
        {!isHome && (
          <Link
            to="/"
            className="relative px-4 bg-transparent text-center text-white rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 group"
          >
            Home
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_#a855f7]"></span>
          </Link>
        )}

        {/* Links dinâmicos exceto o da página atual */}
        {navLinks.map((link) => (
          // 🔥 Essa condição faz com que o botão do link atual não apareça
          location.pathname !== link.path && (
            <Link
              key={link.name}
              to={link.path}
              className="relative px-4 bg-transparent text-center text-white rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 group"
            >
              {link.name}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_#a855f7]"></span>
            </Link>
          )
        ))}

        {/* Botões Login e Cadastro */}
        {navActions.map((action) => (
          <button
            key={action.name}
            onClick={() => handleAction(action.action)}
            className="relative px-4 bg-transparent text-center text-white rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 group"
          >
            {action.name}
            <i className="fas fa-user-circle text-lg mr-2"></i>
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_#a855f7]"></span>
          </button>
        ))}
      </div>

      {/* Ícone menu mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute -mr-5 mt-[170px] md:hidden z-10 right-6 bg-neutral-200 shadow-md rounded px-4 py-4 space-y-2">
          {/* Home (se não estiver na Home) */}
          {!isHome && (
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center text-purple-800 hover:underline"
            >
            início
            </Link>
          )}

          {/* Links dinâmicos exceto o da página atual */}
          {navLinks.map((link) => (
            // 🔥 Condição que oculta o botão da página atual no menu mobile
            location.pathname !== link.path && (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-center text-purple-800 hover:underline"
              >
                {link.name}
              </Link>
            )
          ))}

          {/* Botões Login e Cadastro */}
          {navActions.map((action) => (
            <button
              key={action.name}
              onClick={() => handleAction(action.action)}
              className="block w-full text-center text-purple-800 hover:underline"
            >
              {action.name}
            </button>
          ))}
        </div>
      )}

      {/* Modais */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </nav>
  );
}


