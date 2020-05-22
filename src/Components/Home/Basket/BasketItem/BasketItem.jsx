import React, { useState, useEffect } from 'react';

/**
 * Товар в корзине, его цена и количество
 */
export const BasketItem = (props) => {
  const { name, price, image, id } = props.item;
  const increase = props.increaseQuantity;
  const inBasketState = props.inBasketState;
  // const totalProductsQuantity = props.totalProductsQuantity;
  const changeProductsQuantity = props.changeProductsQuantity;

  const count = 1;

  // изменяется количество товаров
  const [currentCount, setCount] = useState(count);

  const removeCount = () => {
    if (currentCount) {
      setCount(currentCount - 1);
    }
  };
  const addCount = () => setCount(currentCount + 1);

  // Изменяется сумма за одну позицию
  const [sumItem, setSum] = useState(price);

  const allPriceOfPosition = () => {
    setSum(price * currentCount);
  };



  return (
    <div className='flex justify-between items-center bg-gray-400 px-4 py-0 mb-1'>
      <div className='w-2/12'>
        <img className='bg-gray-600 max-w-none w-16 h-16' src={image} alt={name} />
      </div>
      <div className='w-4/12 mr-4 my-4'>{name}</div>
      <p className='w-1/12 mr-2 my-4 font-bold'>{price} ₽</p>
      <p className='w-1/12 mr-2 my-4 font-bold text-gray-600'>{sumItem} ₽</p>
      <div className='flex items-center justify-end  w-3/12 my-4'>
        <button
          className='w-1/3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
          onClick={() => {
            removeCount();
            allPriceOfPosition();
          }}>
          -
        </button>
        <span className='w-1/3 text-center'>{currentCount}</span>
        <button
          className='w-1/3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
          onClick={() => {
            addCount();
            allPriceOfPosition();
            // totalProductsQuantity(id, inBasketState);
            changeProductsQuantity();

            increase(id);
          }}>
          +
        </button>
      </div>
    </div>
  );
};
