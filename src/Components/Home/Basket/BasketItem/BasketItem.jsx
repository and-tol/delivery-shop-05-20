import React, { useState } from 'react';

/**
 * Компонент одной позиции товара в корзине, его название, цена и количество.
 * Component of one item in the basket, its name, price and quantity
 */
export const BasketItem = (props) => {
  const initialBasketState = props.initialBasketState;
  const { name, price, image, id } = props.item;
  const increase = props.increaseQuantity;
  const decrease = props.decreaseQuantity;;
  const changeProductsQuantity = props.changeProductsQuantity;

  /**
   * Количество товара одной позиции
   * Quantity of product in one position
   */
  const count = initialBasketState.find((el) => el.id === id).quantity;

  // Hooks Отслеживает изменения количества товара одной позиции по клику
  // Hooks Tracks changes in the quantity of goods of one position per click
  const [currentCount, setCount] = useState(count);
  /**
   * Функция уменьшает количество товара на единицу.
   * The function decreases the quantity of goods per unit.
   */
  const removeCount = () => {
    if (currentCount > 1) {
      decrease(id);
      setCount(currentCount - 1);
    }
  };
  /**
   * Функция увеличивает количество товара на единицу.
   * The function increases the quantity of goods by one.
   */
  const addCount = () => {
    increase(id)
    setCount(currentCount + 1);
    console.log('currentCount>>>', currentCount);
  };

  const sumItem = price * currentCount;

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
            changeProductsQuantity();
          }}>
          -
        </button>
        <span className='w-1/3 text-center'>{currentCount}</span>
        <button
          className='w-1/3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
          onClick={() => {
            addCount();
            changeProductsQuantity();
          }}>
          +
        </button>
      </div>
    </div>
  );
};
