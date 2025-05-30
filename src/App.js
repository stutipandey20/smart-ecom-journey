import React, { useState } from 'react';
import products from './data/products';
import ProductCard from './components/ProductCard';

function App() {
  const [wishlist, setWishlist] = useState([]);

  const handleWishlistToggle = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId)
        : [...prevWishlist, productId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Smart Wishlist</h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onWishlistToggle={handleWishlistToggle}
            isWishlisted={wishlist.includes(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;