import React, { useState, useEffect } from "react";
import "../App.css";

// Ícones para categorias
const categoryIcons = {
  bolos: "🍰",
  doces: "🧁",
  salgados: "🥟",
  bebidas: "🥤",
};

const categoryLabels = {
  Salgados: "Quantidade de salgados",
  Doces: "Quantidade de doces",
  Bolos: "Escolha o sabor do bolo",
};

const FlipCard = ({ data }) => {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const categories = Object.keys(data.items);
  const currentCategory = categories[carouselIndex];

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const nextCategory = () => {
    setCarouselIndex((prev) => (prev + 1) % categories.length);
  };

  const prevCategory = () => {
    setCarouselIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const handleRadioChange = (id) => {
    setSelectedRadio(id);
  };

  return (
    <div className="bg-[#fffaf4]/01 flex items-center justify-center p-2 h-[373px] rounded-lg shadow-md">
      <div
        className="flip-card w-full max-w-md"
        // onMouseEnter={() => !isMobile && setFlipped(true)}
        onMouseLeave={() => !isMobile && setFlipped(false)}
        onClick={() => isMobile && setFlipped(!flipped)}
      >
        <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>

          {/* FRONT */}
          <div className="flip-card-front bg-[#fffaf4]/50 border-4 border-purple-300 shadow-lg rounded-lg p-4 h-[300px] flex flex-col justify-between">
            <div className="  w-48 w-60 -ml-1 bg-purple-100 text-purple-800 text-sm font-bold py-1 px-3 rounded shadow-sm text-center">
              {data.title}
            </div>
            {/* imagem  */}
            <div className="w-full h-[167px] flex mr-1 items-center justify-center">
              <img
                src={data.image}
                alt={data.title}
                className="w-[270px] h-[170px]  object-fit border-2 border-white-500 rounded-lg"
              />
            </div>

            <p className="bg-pink-100   text-purple-900 mb-6 text-md text-center w-60  font-bold rounded shadow-sm">
              {data.serves}
            </p>

            <div className="absolute mt-[247px]  w-[112px] ml-32 px-2 bg-purple-200 text-purple-800 text-sm font-bold rounded shadow-sm text-center">
              <span className="text-yellow-700 text-sm px-3 flex items-center gap-1 justify-center">
                <strong>{data.rating} ★</strong>
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(true);
              }}
              className="absolute mt-[247px]  w-[112px] mr-3 px-2 bg-green-100 text-green-800 text-sm font-bold rounded shadow-sm text-center hover:bg-green-300 transition duration-200"
            >
              Detalhes
            </button>
          </div>

          {/* BACK */}
          <div className="flip-card-back bg-blue-100/50 border-4 border-pink-400 rounded-lg p-2 h-full flex flex-col">
            {/* Carousel Navigation */}
            <div className="flex justify-between bg-purple-200 rounded-md items-center mb-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevCategory();
                }}
                className="text-pink-500 hover:text-pink-700 font-bold ml-2 text-1xl"
              >
                ◀
              </button>
              <h3 className="text-md font-semibold text-pink-700 flex items-center gap-2">
                <span className="text-xl">
                  {categoryIcons[currentCategory.toLowerCase()] || "📦"}
                </span>
                {currentCategory}
              </h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextCategory();
                }}
                className="text-pink-500 hover:text-pink-700 font-bold mr-2 text-1xl"
              >
                ▶
              </button>
            </div>

            {/* ✅ Legenda acima da lista */}
            <div className="text-center mb-1">
              <p className="w-62 bg-white text-gray-900 text-sm font-bold  px-3 rounded shadow-sm text-center">
                {categoryLabels[currentCategory] || "Itens do pacote"}
              </p>
            </div>

            {/* Items List */}
            <div className="border-2 border-white mt-1 rounded-lg p-1">
              <ul className="  space-y-1 flex flex-col h-full justify-between">
                {data.items[currentCategory].map((item) => {
                  const id = `${currentCategory}-${item.nome.replace(/\s+/g, '').toLowerCase()}`;
                  const isRadio = currentCategory.toLowerCase() === "bolos";

                  return (
                    <li
                      key={id}
                      className="flex justify-between items-center bg-white p-1 mt-2 rounded shadow-sm"
                    >
                      <div className="flex items-center">
                        {isRadio ? (
                          <>
                            <input
                              type="radio"
                              name={currentCategory}
                              id={id}
                              value={item.nome}
                              className="custom-radio"
                              onChange={() => handleRadioChange(id)}
                            />
                            <label htmlFor={id} className="radio-label ml-2 text-gray-700">
                              {item.nome}
                            </label>
                          </>
                        ) : (
                          <span className="text-gray-700">{item.nome}</span>
                        )}
                      </div>
                      <span className="text-sm text-emerald-600 font-medium">
                        {item.quantidade}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* Buttons */}

            <p className="absolute bg-yellow-100 text-purple-900 text-md text-center ml-1 mt-56 w-60 font-bold rounded shadow-sm">
              Valor: {data.price}
            </p>
            <div className="flex gap-5 self-center mt-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFlipped(false);
                }}
                className="bg-yellow-50 hover:bg-gray-300 font-bold text-purple-800 ml-10 w-24  rounded-md transition-colors duration-200"
              >
                Voltar
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  alert("Compra realizada!");
                }}
                className="bg-yellow-50 hover:bg-gray-300 font-bold text-purple-800 w-32  mr-10 rounded-md transition-colors duration-200"
              >
             Realizar pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;















