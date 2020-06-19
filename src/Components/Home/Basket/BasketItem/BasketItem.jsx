import React, { useState } from 'react';

/**
 * Компонент одной позиции товара в корзине, его название, цена и количество.
 * Component of one item in the basket, its name, price and quantity
 */
export const BasketItem = (props) => {
  const initialBasketState = props.initialBasketState;
  const { name, price, image, id } = props.item;
  const increase = props.increaseQuantity;
  const decrease = props.decreaseQuantity;
  const changeQuantity = props.changeQuantity;
console.log('props', props.item)
  /**
   * Количество товара одной позиции
   * Quantity of product in one position
   */
  const count = initialBasketState.length
    ? initialBasketState.find((el) => el.id === id).quantity
    : 0;

  // Hooks Отслеживает изменения количества товара одной позиции по клику
  // Hooks Tracks changes in the quantity of product of one position per click
  const [currentCount, setCount] = useState(count);
  /**
   * Функция уменьшает количество товара на единицу.
   * The function decreases the quantity of a specific product by one.
   */
  const removeCount = () => {
    if (currentCount > 1) {
      decrease(id);
      setCount(currentCount - 1);
    }
  };
  /**
   * Функция увеличивает количество конкретного товара  на единицу.
   * This function increases the quantity of a specific product by one
   */
  const addCount = () => {
    increase(id);
    setCount(currentCount + 1);
  };

  const sumItem = price * currentCount;

  return (
    <div className='basket-product'>
      <div className='w-2/12'>
        <img className='bg-gray-600 max-w-none w-16 h-16' src={image} alt={name} />
      </div>
      <div className='w-4/12 mr-4 my-4'>{name}</div>
      <p className='w-1/12 mr-2 my-4 font-bold'>{price} ₽</p>
      <p className='w-1/12 mr-2 my-4 font-bold text-gray-600'>{sumItem} ₽</p>
      <div className='flex items-center justify-end  w-3/12 my-4'>
        <button
          className='btn btn:hover w-1/3'
          onClick={() => {
            removeCount();
            changeQuantity();
          }}>
          -
        </button>
        <span className='w-1/3 text-center'>{currentCount}</span>
        <button
          className='btn btn:hover  w-1/3'
          onClick={() => {
            addCount();
            changeQuantity();
          }}>
          +
        </button>
      </div>
    </div>
  );
};
