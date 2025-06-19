import React, { useState } from "react";
import produtosPorCategoria from '../data/produtosData';

const EscolhaFavoritos = () => {
    const [categoriaAtiva, setCategoriaAtiva] = useState("salgados");
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    const [produtoHover, setProdutoHover] = useState(null);

    const produtos = produtosPorCategoria[categoriaAtiva];

    const limparDetalhes = () => {
        setProdutoSelecionado(null);
        setProdutoHover(null);
    };

    return (
        <div className="flex items-center justify-center bg-white/20 p-3 xsplus:mt-4">
            <div className="w-full max-w-9xl bg-white/10 rounded-xl shadow-lg overflow-hidden transition-all  ">

                {/* Cabeçalho */}
                <div className="bg-gradient-to-r from-purple-500/10 via-indigo-600/70 to-purple-500/20 p-2 text-center">
                    <h1 className="text-xl sm:text-2xl md:text-lg font-bold text-white">
                        <i className="fas fa-heart mr-2"></i> ESCOLHA SEUS FAVORITOS
                    </h1>
                </div>

                {/* Container principal */}
                <div className="flex flex-col md:mt-4 w-full max-w-full md:w-[70%] xl:w-[75%]  mx-auto  border-2 border mdcol:w-[90%]">

                    {/* Lista de categorias */}
                    <div className="border-b w-full border-white p-2 overflow-x-auto z-10 relative">
                        <div className="flex flex-wrap justify-center gap-4 min-w-fit md:space-x-32 mdcol:space-x-12">
                            {Object.keys(produtosPorCategoria).map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setCategoriaAtiva(cat);
                                        limparDetalhes();
                                    }}
                                    className={`py-1 px-3 rounded-lg font-semibold whitespace-nowrap ${categoriaAtiva === cat
                                        ? "bg-purple-500/65 text-white"
                                        : "bg-purple-400/50 text-white hover:bg-purple-400 border-b-4 border-r-4 border-gray-900"
                                        }`}
                                >
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Conteúdo principal */}
                    <div className="flex flex-col md:flex-row  justify-center gap-3 h-auto md:h-[auto] border-2 border-yellow mdcol:flex-col mdcol:h-[67vh] ">

                        {/* Lista de produtos */}
                        <div className={`w-full md:max-w-xs ${produtoSelecionado || produtoHover ? 'hidden md:flex' : 'flex'} h-[27vh] mb-12 mx-auto
                         flex-col justify-center md:h-[38vh] mdcol:mb-[40vh] mdcol:ml-20  mdcol:w-[90%] mdcol:mx-auto mdcol:absolute`}>
                            {produtos.map((prod) => (
                                <div
                                    key={prod.nome}
                                    onClick={() => setProdutoSelecionado(prod)}
                                    onMouseEnter={() => setProdutoHover(prod)}
                                    className={`mdcol:w-[50vh] p-2 mt-4  rounded-lg shadow-sm hover:shadow-md cursor-pointer transition-all hover:bg-gray-900/30 border 
                                    ${produtoHover?.nome === prod.nome ? 'bg-gray-900/30' : ''}
                                    mdcol:mx-auto`}
                                >
                                    <div className="flex items-center justify-between h-full">
                                        <h3 className="font-semibold text-white text-base sm:text-lg">{prod.nome}</h3>
                                        <button className="hidden md:block bg-purple-400/50 text-white hover:bg-purple-400 border-b-4 border-r-4 border-gray-900 px-3 sm:px-5
                                         rounded-xl font-semibold transition-all ml-2 text-sm sm:text-base">
                                            <i className="fas fa-shopping-cart mr-1"></i> Realizar pedido
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>



                        {/* Detalhes do produto */}
                        <div className={`w-full md:w-1/2 flex items-center justify-center p-1 ${produtoSelecionado || produtoHover ? 'block' : 'hidden'} md:block mdcol:w-[90%]  mdcol:p-0 `}>
                            {(produtoSelecionado || produtoHover) ? (
                                <div className="w-full h-[52vh] flex flex-col justify-between ">
                                    <div className="flex justify-end">
                                        <button
                                            className="text-gold hover:text-red-500 text-4xl font-bold block md:hidden"
                                            onClick={limparDetalhes}
                                        >
                                            &times;
                                        </button>
                                    </div>

                                    <div className="flex flex-col items-center mb-20  mdcol:p-0 mdcol:m-0">
                                        <div className="flex justify-center w-full sm:w-[80%] ">
                                            <img
                                                src={(produtoSelecionado || produtoHover).imagem}
                                                alt={(produtoSelecionado || produtoHover).nome}
                                                className="w-full h-49 object-cover border-2 border-white rounded-xl shadow-md mt-0 mdcol:h-72 mdcol:ml-14"
                                            />
                                        </div>

                                        <div className="text-center flex flex-col items-center w-full max-w-md">
                                            <p className="text-white font-semibold text-base sm:text-lg">
                                                {(produtoSelecionado || produtoHover).descricao}
                                            </p>

                                            <div className="flex items-center justify-center bg-gray-700/50 mt-2 rounded-lg">
                                                <span className="text-lg font-bold text-gold">
                                                    {(produtoSelecionado || produtoHover).preco}
                                                </span>
                                                <span className="text-sm sm:text-base text-gold font-bold ml-1">
                                                    (100 unidades)
                                                </span>
                                            </div>

                                            {/* Botão de pedido para mobile */}
                                            <button className="mt-2 md:hidden bg-purple-500/70 text-white hover:bg-purple-600 border-b-4 border-r-4 border-gray-900 px-5 py-1 rounded-xl font-semibold transition-all">
                                                <i className="fas fa-shopping-cart mr-1"></i> Realizar pedido
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center text-gray-500">
                                    <i className="fas fa-search text-4xl sm:text-5xl mb-4"></i>
                                    <h3 className="text-base sm:text-xl font-semibold text-white">
                                        passe o mouse sobre o item<br />para visualizar
                                    </h3>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EscolhaFavoritos;
