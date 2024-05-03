import React from 'react';
import { Header } from './components/Header';
import { ProductGallery } from './components/ProductGallery';
import { ProductDetails } from './components/ProductDetails';

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <main className="flex justify-center mx-20 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <ProductGallery />
          <ProductDetails />
        </div>
      </main>
    </div>
  );
};

export default App;