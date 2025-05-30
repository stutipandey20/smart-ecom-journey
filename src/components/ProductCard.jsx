import React, { useState } from 'react';


const ProductCard = ({ product, onWishlistToggle, isWishlisted }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center relative">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-40 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold text-center">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>

      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Add to Cart
      </button>

      <button
        className="absolute top-3 right-3 text-xl"
        onClick={() => onWishlistToggle(product.id)}
        title="Toggle Wishlist"
      >
        {isWishlisted ? '💖' : '🤍'}
      </button>
    </div>
  );
};


export default ProductCard;