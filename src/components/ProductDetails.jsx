import React, { useState } from 'react';
import { Button } from 'primereact/button';

export const ProductDetails = () => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
  };

  return (
    <div className="mt-16 w-3/5">
      <h3 className="text-orange-500 uppercase tracking-wider mb-2 text-sm font-bold">Sneaker Company</h3>
      <h1 className="text-4xl font-bold mb-4">Fall Limited Edition Sneakers</h1>
      <p className="text-gray-400 mb-6">
        These low-profile sneakers are your perfect casual wear companion. Featuring a
        durable rubber outer sole, they'll withstand everything the weather can offer.
      </p>
      <div className="flex items-center mb-2">
        <span className="text-3xl font-bold mr-6">$125.00</span>
        <span className="bg-orange-100 text-orange-500 font-bold py-1 px-2 rounded-md">50%</span>
      </div>
      <span className='font-bold text-gray-300 line-through'>$250.00</span>
      <div className="flex items-center mt-6">
        <div className='flex items-center space-x-8 mr-8 bg-slate-100 py-2 font-bold rounded-lg'>
            <Button icon="pi pi-minus" onClick={decrement} className="text-orange-500" />
            <span className="text-xl">{quantity}</span>
            <Button icon="pi pi-plus" onClick={increment} className="text-orange-500" />
        </div>
        <Button label="Add to cart" icon="pi pi-shopping-cart" className="bg-orange-500 text-white font-semibold rounded-lg py-2 px-10" />
      </div>
    </div>
  );
};