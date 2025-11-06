import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 rounded-xl shadow-md flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.imageUrl}  // Cambiado de 'image' a 'imageUrl'
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"  // Agregado altura fija
      />

      <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
      <p className="text-gray-600 font-medium">${product.price.toLocaleString()}</p>  {/* Formateado el precio */}

      <button
        className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-2 rounded-lg hover:scale-105 transition-all duration-200 font-semibold"
        onClick={() => onAddToCart(product)}
      >
        Agregar
      </button>
    </div>
  );
};

export default ProductCard;