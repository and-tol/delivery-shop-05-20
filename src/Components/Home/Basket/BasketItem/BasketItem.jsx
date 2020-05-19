import React, { useState } from 'react';

/**
 * Товар в корзине и его количество
 */
export const BasketItem = (props) => {
  const { name, price, image } = props.item;
  const [count, setCount] = useState(0);

  const removeCount = () => {
    if (count) {
      setCount(count - 1);
    }
  };
  const addCount = () => {
    setCount(count + 1);
  };
  // debugger

  return (
    <div className='flex justify-between items-center bg-gray-400 px-4 py-1 mb-1'>
      <div className='w-2/12'>
        <img className='bg-gray-600 max-w-none w-16 h-16' src={image} alt={name} />
      </div>
      <div className='w-4/12 mr-8 my-4'>{name}</div>
      <strong className='w-4/12 mr-8 my-4'>{price} ₽</strong>
      <div className='w-2/12 my-4'>
        <button
          className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
          onClick={removeCount}>
          -
        </button>
        <span className='px-6'>{count}</span>
        <button
          className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
          onClick={() => {
            console.log('click')
            addCount()
          }}>
          +
        </button>
      </div>
    </div>
  );
};
