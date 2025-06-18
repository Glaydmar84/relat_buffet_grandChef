import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaWhatsapp, FaTiktok, FaInstagram, FaTwitter, FaTelegramPlane, FaTimes } from 'react-icons/fa';
export default function RegisterModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados cadastrados:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gray-900 border border-white rounded-lg p-8 shadow-lg w-full max-w-md relative">

        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-purple-400 transition"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-2xl mb-6 text-center text-white font-bold">
          Criar Conta
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome completo"
            required
            className="w-full px-4 py-1 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
            className="w-full px-4 py-1 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Telefone"
            required
            className="w-full px-4 py-1 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            required
            className="w-full px-4 py-1 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            placeholder="Senha"
            required
            className="w-full px-4 py-1 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="password"
            name="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            placeholder="Confirmar senha"
            required
            className="w-full px-4 py-1 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-3 py-1 rounded font-semibold transition"
          >
            Cadastrar
          </button>
        </form>
        <hr className=" mt-8"></hr>
        {/* Ícones Sociais */}
        <p className="telative text-center text-white mt-4">
          Ou se preferir cadastre-se com
        </p>

        {/* Ícones de redes sociais */}
        <div className="flex justify-center mt-4 space-x-8">

          <a href="#" className="opacity-60 hover:opacity-100 transition">
            <FaFacebookF size={24} className="text-blue-500" />
          </a>
          <a href="#" className="opacity-60 hover:opacity-100 transition">
            <FaGoogle size={24} className="text-red-500" />
          </a>
          <a href="#" className="opacity-60 hover:opacity-100 transition">
            <FaWhatsapp size={24} className="text-green-400" />
          </a>
          <a href="#" className="opacity-60 hover:opacity-100 transition">
            <FaTiktok size={24} className="text-white" />
          </a>
          <a href="#" className="opacity-60 hover:opacity-100 transition">
            <FaInstagram size={24} className="text-pink-500" />
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
  );
}






