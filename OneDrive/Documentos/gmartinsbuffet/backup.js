// import React, { useState, useEffect } from "react";
// import "../App.css";

// const FlipCard = ({ data }) => {
//   const [flipped, setFlipped] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [abertos, setAbertos] = useState({});

//   // Detecta se é mobile com base no tamanho da tela
//   useEffect(() => {
//     const verificarTamanho = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     verificarTamanho();
//     window.addEventListener("resize", verificarTamanho);
//     return () => window.removeEventListener("resize", verificarTamanho);
//   }, []);

//   const alternarDropdown = (categoria) => {
//     setAbertos((prev) => ({
//       [categoria]: !prev[categoria], // Fecha ou abre o dropdown dessa categoria
//     }));
//   };

//   return (
//     <div className="bg-gray-100 flex items-center justify-center p-2 h-[300px] rounded-lg">
//       <div
//         className="flip-card w-full max-w-md"
//         onMouseEnter={() => !isMobile && setFlipped(true)}
//         onMouseLeave={() => !isMobile && setFlipped(false)}
//         onClick={() => isMobile && setFlipped(!flipped)}
//       >
//         <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
//           {/* Parte frontal */}
//           <div className="flip-card-front bg-white rounded-lg p-4 h-full">
//             <div className="h-35 rounded overflow-hidden">
//               <img
//                 src={data.image}
//                 alt={data.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h2 className="text-xl font-bold text-gray-800 mt-2">
//               {data.title}
//             </h2>
//             <p className="text-gray-600 mt-1">Pacote para festa</p>
//             <div className="flex justify-between items-center mt-2">
//               <span className="text-lg font-bold text-emerald-600">
//                 {data.price}
//               </span>
//             </div>
//             <div className="mt-3 flex gap-2 items-center justify-between">
//               <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 ml-2 rounded">
//                 {data.rating} ★
//               </span>
//             </div>
//           </div>

//           {/* Parte posterior */}
//           <div className="flip-card-back bg-gray-50 rounded-lg p-4 flex flex-col items-start overflow-y-auto h-full">
//             {Object.entries(data.items).map(([categoria, itens]) => (
//               <div key={categoria} className="w-full mb-2">
//                 <button
//                   onClick={() => alternarDropdown(categoria)}
//                   className="w-full text-left font-semibold text-purple-700 bg-purple-100 hover:bg-purple-200 px-3 py-2 rounded-md transition-colors"
//                 >
//                   {categoria}
//                 </button>

//                 {abertos[categoria] && (
//                   <ul className="mt-1 pl-3 space-y-1">
//                     {itens.map((item, index) => (
//                       <li
//                         key={`${categoria}-${index}`}
//                         className="flex justify-between items-center bg-white p-2 rounded shadow-sm"
//                       >
//                         {categoria === "Bolo" ? (
//                           <>
//                             <label className="flex items-center gap-2 text-gray-700">
//                               <input
//                                 type="radio"
//                                 name="bolo"
//                                 value={item.nome}
//                                 className="accent-purple-600"
//                               />
//                               {item.nome}
//                             </label>
//                             <span className="text-sm text-emerald-600 font-medium">
//                               {item.quantidade}
//                             </span>
//                           </>
//                         ) : (
//                           <>
//                             <span className="text-gray-700">{item.nome}</span>
//                             <span className="text-sm text-emerald-600 font-medium">
//                               {item.quantidade}
//                             </span>
//                           </>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}

//             <div className="flex gap-2 self-center mt-auto pt-4">
//               <button
//                 onClick={() => setFlipped(false)}
//                 className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md transition-colors duration-200"
//               >
//                 Voltar
//               </button>
//               <button
//                 onClick={() => alert("Compra realizada!")}
//                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
//               >
//                 Comprar
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlipCard;


// import React, { useRef } from "react";
// import FlipCard from "./CardFlip";
// const CardCarousel = () => {
//   const carouselRef = useRef(null);

//   const scroll = (direction) => {
//     const container = carouselRef.current;
//     const scrollAmount = 340; // largura do card + gap (~320px + 20px)

//     if (direction === "left") {
//       container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     } else {
//       container.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   const cardsData = [
//   {
//     id: 1,
//     title: "Pacote Bronze",
//     image: "/imagens/luadesangue.jpg",
//     price: "R$ 150,00",
//     rating: 4,
//     items: {
//   Salgados: [
//     { nome: "Coxinha", quantidade: 100 },
//     { nome: "Pastel", quantidade: 100 },
//     { nome: "Mini-hambúrguer", quantidade: 100 }
//   ],
//   Bolos: [
//     { nome: "Morango", quantidade: 40 },
//     { nome: "Maracujá", quantidade: 38 },
//     { nome: "Doce de leite", quantidade: 42 }
//   ],
//   Doces: [
//     { nome: "Brigadeiro", quantidade: 100 },
//     { nome: "Beijinho", quantidade: 100 },
//     { nome: "Moranguinho", quantidade: 100 }
//   ]
// }

//   },
//   {
//     id: 2,
//     title: "Pacote Prata",
//     image: "/imagens/prata.jpg",
//     price: "R$ 250,00",
//     rating: 4.5,
//     items: {
//   Salgados: [
//     { nome: "Coxinha", quantidade: 100 },
//     { nome: "Pastel", quantidade: 100 },
//     { nome: "Mini-hambúrguer", quantidade: 80 }
//   ],
//   Bolos: [
//     { nome: "Morango", quantidade: 40 },
//     { nome: "Maracujá", quantidade: 38 },
//     { nome: "Doce de leite", quantidade: 42 }
//   ],
//   Doces: [
//     { nome: "Brigadeiro", quantidade: 100 },
//     { nome: "Beijinho", quantidade: 100 },
//     { nome: "Moranguinho", quantidade: 100 }
//   ]
// }

//   },
//   {
//     id: 3,
//     title: "Pacote Ouro",
//     image: "/imagens/ouro.jpg",
//     price: "R$ 350,00",
//     rating: 5,
//    items: {
//   Salgados: [
//    { nome: "Coxinha", quantidade: 100 },
//     { nome: "Pastel", quantidade: 100 },
//     { nome: "Mini-hambúrguer", quantidade: 80 }
//   ],
//   Bolos: [
//     { nome: "Morango", quantidade: 40 },
//     { nome: "Maracujá", quantidade: 38 },
//     { nome: "Doce de leite", quantidade: 42 }
//   ],
//   Doces: [
//     { nome: "Brigadeiro", quantidade: 100 },
//     { nome: "Beijinho", quantidade: 100 },
//     { nome: "Moranguinho", quantidade: 100 }
//   ]
// }

//   },
//   {
//     id: 4,
//     title: "Pacote Platina",
//     image: "/imagens/platina.jpg",
//     price: "R$ 450,00",
//     rating: 5,
//     items: {
//   Salgados: [
//     { nome: "Coxinha", quantidade: 100 },
//     { nome: "Pastel", quantidade: 100 },
//     { nome: "Mini-hambúrguer", quantidade: 80 }
//   ],
//   Bolos: [
//     { nome: "Morango", quantidade: 40 },
//     { nome: "Maracujá", quantidade: 38 },
//     { nome: "Doce de leite", quantidade: 42 }
//   ],
//   Doces: [
//     { nome: "Brigadeiro", quantidade: 100 },
//     { nome: "Beijinho", quantidade: 100 },
//     { nome: "Moranguinho", quantidade: 100 }
//   ]
// }

//   },
//   {
//     id: 5,
//     title: "Pacote Diamante",
//     image: "/imagens/diamante.jpg",
//     price: "R$ 550,00",
//     rating: 5,
//    items: {
//   Salgados: [
//     { nome: "Coxinha", quantidade: 100 },
//     { nome: "Pastel", quantidade: 100 },
//     { nome: "Mini-hambúrguer", quantidade: 80 }
//   ],
//   Bolos: [
//     { nome: "Morango", quantidade: 40 },
//     { nome: "Maracujá", quantidade: 38 },
//     { nome: "Doce de leite", quantidade: 42 }
//   ],
//   Doces: [
//     { nome: "Brigadeiro", quantidade: 100 },
//     { nome: "Beijinho", quantidade: 100 },
//     { nome: "Moranguinho", quantidade: 100 }
//   ]
// }

//   },
//   {
//     id: 6,
//     title: "Pacote Diamante",
//     image: "/imagens/diamante.jpg",
//     price: "R$ 550,00",
//     rating: 5,
//    items: {
//   Salgados: [
//     { nome: "Coxinha", quantidade: 100 },
//     { nome: "Pastel", quantidade: 100 },
//     { nome: "Mini-hambúrguer", quantidade: 80 }
//   ],
//   Bolos: [
//     { nome: "Morango", quantidade: 40 },
//     { nome: "Maracujá", quantidade: 38 },
//     { nome: "Doce de leite", quantidade: 42 }
//   ],
//   Doces: [
//     { nome: "Brigadeiro", quantidade: 100 },
//     { nome: "Beijinho", quantidade: 100 },
//     { nome: "Moranguinho", quantidade: 100 }
//   ]
// }

//   },
// ];

//   return (
//     <div className="relative w-full flex items-center py-8 px-10 mt-12">
//       {/* Botão esquerdo */}
//       <button
//         onClick={() => scroll("left")}
//          className="absolute  left-0 z-10 w-10 h-10 bg-transparent -ml-0.5 border border-purple-300 text-gold text-xl rounded-full shadow-md hover:bg-gray-700  hover:scale-110 transition"
// >
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
//   </svg>
//       </button>

//       {/* Lista de Cards com rolagem horizontal */}
//       <div
//         ref={carouselRef}
//         className="flex gap-12 overflow-x-auto scroll-smooth no-scrollbar px-10"
//       >
//         {cardsData.map((data) => (
//           <div key={data.id} className="flex-shrink-0 w-[270px]">
//             <FlipCard data={data} />
//           </div>
//         ))}
//       </div>

//       {/* Botão direito */}
//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-0 z-10 -mr-1 w-10 h-10 bg-trnasparent flex items-center  justify-center transform rotate-180 border border-purple-300 text-gold text-xl rounded-full shadow-md hover:bg-gray-700 hover:scale-110 transition"
// >
//       <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//   </svg>
//       </button>
//     </div>
//   );
// };

// export default CardCarousel;



// .flip-card {
//   perspective: 1000px;
// }

// .flip-card-inner {
//   position: relative;
//   width: 100%;
//   height: 300px; /* altura fixa para garantir espaço para o efeito */
//   transform-style: preserve-3d;
//   transition: transform 0.6s;
  
// }

// .flip-card-inner.flipped {
//   transform: rotateY(180deg);
// }

// .flip-card-front,
// .flip-card-back {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   backface-visibility: hidden;
//   top: 0;
//   left: 0;
//   border-radius: 0.5rem; /* compatível com Tailwind rounded-lg */
// }

// .flip-card-back {
//   transform: rotateY(180deg);
// }

// /* Suavizar a transição do carrossel (opcional) */
// .carousel-container {
//   transition: transform 0.5s ease-in-out;
// }

// /* index.css ou App.css */
// .no-scrollbar::-webkit-scrollbar {
//   display: none;
// }


