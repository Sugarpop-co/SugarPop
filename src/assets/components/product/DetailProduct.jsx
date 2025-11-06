import React, { useState } from 'react';
import CartIcon from '../icons/CartIcon.jsx';

export default function DetailProductSugarPop() {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => setQuantity(quantity + 1);
    const handleDecrement = () => {
        if (quantity > 0) setQuantity(quantity - 1);
    };

    return (
        <section className="container mx-auto px-4 md:px-0 bg-[#FCE7F3] rounded-2xl p-6 shadow-md">
            {/* Marca */}
            <p className="mb-3 font-bold uppercase tracking-wide text-[#FF6EBE]">
                Sugar Pop
            </p>

            {/* Título */}
            <h2 className="mb-4 text-3xl font-extrabold text-[#3A2E2E]">
                Brilla con estilo
            </h2>

            {/* Descripción */}
            <p className="mb-6 text-[#5E5A5A] leading-relaxed">
                Descubre la colección <strong className="text-[#FF6EBE]">Sugar Pop</strong>, 
                una mezcla perfecta de tonos pasteles, texturas ligeras y energía positiva. 
                ¡Ideal para un look dulce, colorido y moderno!
            </p>

            {/* Sección de precios */}
            <div className="mb-6 flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center gap-3">
                    <span className="text-3xl font-bold text-[#FF6EBE]">$125.00</span>
                    <span className="rounded-md bg-[#FFE1F2] py-1 px-2 text-[#FF6EBE] text-sm font-semibold">
                        50%
                    </span>
                </div>
                <span className="text-lg text-gray-400 line-through mt-1">$250.00</span>
            </div>

            {/* Controles */}
            <div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_2fr]">
                {/* Contador */}
                <div className="col-span-3 flex items-center justify-between rounded-md bg-[#FFF7FB] py-3 px-5 md:col-span-1 border border-[#FFD8EE] shadow-inner">
                    <button 
                        className="text-3xl text-[#FF6EBE] hover:text-[#FF3FA3] transition" 
                        onClick={handleDecrement}
                    >
                        −
                    </button>
                    <span className="text-gray-700">{quantity}</span>
                    <button 
                        className="text-3xl text-[#FF6EBE] hover:text-[#FF3FA3] transition" 
                        onClick={handleIncrement}
                    >
                        +
                    </button>
                </div>

                {/* Botón Agregar */}
                <button className="col-span-3 flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#FF6EBE] via-[#D6A8FF] to-[#8DE7E0] hover:from-[#FF5FB4] hover:to-[#7BDDD4] py-3 text-white md:col-span-1 transition-all duration-300 shadow-md hover:shadow-lg">
                    <CartIcon fill="#FFF" />
                    <span>Agregar al carrito</span>
                </button>
            </div>
        </section>
    );
}



