import React, { useState } from 'react';

/**
 * Компонент одной позиции товара в корзине, его название, цена и количество.
 * @component Component of one item in the basket, its name, price and quantity
 */
export const BasketItem = (props) => {
  console.log('props', props)
  const basket = props.basket;

  const initialBasketState = basket.basketState;
  const { name, price, image, id } = props.item;
  const changeQuantity = props.changeQuantity;
  const changeTotalQuantity = props.changeTotalQuantity;

  // const removeProduct = props.removeProduct;
  const handleRemoveProduct = props.handleRemoveProduct;

  /**
   * Количество товара одной позиции
   * @var {Number} count Quantity of product in one position
   */
  let count = 0;

  /**
   * @constant {Boolean} isProduct the existence of the product in the basket
   */
  const isProduct = basket.basketState.some((el) => el.id === id);

  if (isProduct) {
    //
    count = initialBasketState.find((el) => el.id === id).quantity;
  }

  // Hook Отслеживает изменения количества товара одной позиции по клику
  // Hook Tracks changes in the quantity of product of one position per click
  const [currentCount, setCount] = useState(count);
  /**
   * Функция уменьшает количество товара на единицу.
   * @function removeCount decreases the quantity of a specific product by one.
   */
  const removeCount = () => {
    if (currentCount > 1) {
      changeQuantity(id, '-');
      setCount(currentCount - 1);
      changeTotalQuantity(basket.basketState);
    }
  };
  /**
   * Функция увеличивает количество конкретного товара  на единицу.
   * @function addCount This function increases the quantity of a specific product by one
   */
  const addCount = () => {
    changeQuantity(id, '+');
    setCount(currentCount + 1);
    changeTotalQuantity(basket.basketState);
  };

  /**
   * @constant {Number} sumItem Total cost of specific product
   */
  const sumItem = price * currentCount;

  return (
    <div className='basket-product'>
      <div className='w-2/12'>
        <img
          className='bg-gray-600 max-w-none w-16 h-16'
          src={image}
          alt={name}
        />
      </div>
      <div className='w-4/12 mr-4 my-4'>{name}</div>
      <p className='w-1/12 mr-2 my-4 font-bold'>{price} ₽</p>
      <p className='w-1/12 mr-2 my-4 font-bold text-gray-600'>{sumItem} ₽</p>
      <div className='flex items-center justify-end  w-3/12 my-4'>
        <button
          className='btn btn-std btn-std:hover w-1/3 btn-std'
          onClick={() => {
            removeCount();
            // changeTotalQuantity();
          }}
        >
          -
        </button>
        <span className='w-1/3 text-center'>{currentCount}</span>
        <button
          className='btn btn-std btn-std:hover  w-1/3'
          onClick={() => {
            addCount();
            // changeTotalQuantity();
          }}
        >
          +
        </button>
        <button
          className='btn w-2/12 m-2 btn-del btn-del:hover '
          onClick={() => {
 
            // handleRemoveProduct(id, basket);
 
          }}
        >
          &times;
        </button>
      </div>
    </div>
  );
};
