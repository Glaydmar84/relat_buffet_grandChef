import React from 'react';
import { FaFacebookF, FaGoogle, FaWhatsapp, FaTiktok, FaInstagram, FaTwitter, FaTelegramPlane, FaTimes } from 'react-icons/fa';

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70  flex items-start pt-10 h-full  justify-center z-50">
      <div className="relative bg-gray-900/70 h-[470-px] backdrop-blur-md border border-white rounded-lg shadow-lg py-4 px-8  max-w-2xl">

        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-purple-400 transition"
        >
          <FaTimes size={20} />
        </button>

        {/* Título */}
        <h2 className="text-2xl font-bold mb-4 text-transparent text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
          Login
        </h2>

        <form className="space-y-4">
          {/* Ícones de redes sociais */}

          {/* Inputs lado a lado */}

          <div>
            <label className="block mb-1 text-sm font-medium text-white">
              email
            </label>
            <input
              type="password"
              className=" bg-white/20 backdrop-blur-sm border border-white/30 w-full text-white px-4 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-white/60"
              placeholder="Digite sua senha"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-white">
              Senha
            </label>
            <input
              type="password"
              className=" bg-white/20 backdrop-blur-sm border border-white/30 w-full text-white px-4 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-white/60"
              placeholder="Digite sua senha"
            />
          </div>

          <div className="flex justify-center items-center">

            <button
              type="submit"
              className="px-4 py-1 mt-2                                                                                                                                                                                                                                                          w-full bg-gradient-to-r from-blue-500 to-purple-600  hover:from-blue-600 hover:to-purple-700  text-white font-semibold rounded-md shadow-md transition"
            >
              Entrar
            </button>

          </div>

          <p className=" text-sm ml-4 mt-6 text-center text-white hover:underline">
            Esqueceu a senha?  <a href="#" className="text-blue-300"> Clique aqui.</a>
          </p>

          {/* Botão + Esqueceu a senha */}
          <div className="flex">
          </div>
        </form>
        {/* Cadastre-se */}

        <div>
          <p className="telative text-center w-full text-white ">
            Não tem uma conta?{' '}
            <a href="#" className="text-blue-400 hover:underline">
              Cadastre-se
            </a>
          </p>
          <hr className=" bg-blue-500 mt-4" ></hr>

          <p className="text-sm text-center mt-2 font-medium text-white">
            ou se preferir entre com
          </p>
          <div className="flex justify-center  mt-4 py-1 rounded-lg space-x-6">

            <a href="#" className="opacity-60 hover:opacity-100 transition">
              <FaFacebookF size={23} className="text-blue-500" />
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition">
              <FaGoogle size={23} className="text-red-500" />
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition">
              <FaWhatsapp size={23} className="text-green-400" />
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition">
              <FaTiktok size={23} className="text-white" />
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition">
              <FaInstagram size={23} className="text-pink-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/imagens/x-logo1.png"
                alt="X (Twitter)"
                className="w-4 h-4 sm:w-7 sm:h-7 object-contain border border-gray-300 rounded-md p-1 bg-neutral-100 hover:bg-neutral-300 transition duration-200"
              />
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition">
              <FaTelegramPlane size={24} className="text-blue-500" />
            </a>
          </div>
        </div>

      </div>
    </div>

  );
}




