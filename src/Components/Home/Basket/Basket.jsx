import React from 'react';

export const Basket = () => {
  return (
    <section className='container mx-auto p-2 bg-gray-200'>
      <div className='flex items-center bg-gray-200 bg-gray-400 px-4 py-2'>
        <span className='mr-8 my-4'>Пицца Чиз</span>
        <strong className='mr-8 my-4'>500 ₽</strong>
        <div className='my-4'>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            -
          </button>
          <span className='px-6'>2</span>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            +
          </button>
        </div>
      </div>
      <div className='food-row'>
        <span className='food-name'>Пицца Пеперони</span>
        <strong className='food-price'>500 ₽</strong>
        <div className='food-counter'>
          <button className='counter-button counter-minus'>-</button>
          <span className='counter'>1</span>
          <button className='counter-button counter-plus'>+</button>
        </div>
      </div>
    </section>
  );
};
