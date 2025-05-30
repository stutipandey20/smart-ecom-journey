import React from 'react';
import ProductCard from './components/ProductCard';
import products from './data/products';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Smart Wishlist</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
