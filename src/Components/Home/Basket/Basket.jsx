import React, { useState } from 'react';
import { BasketItem } from './BasketItem/BasketItem';
import {
  basket,
  newBasketState,
  increaseQuantity,
  decreaseQuantity,
  changeQuantity,
  // TODO: реализовать вместо incr/decr
} from '../../../basket-data/basket-data';

/**
 * Компонент корзины с товарами.
 * Component of the basket of goods
 * @component
 */
export const Basket = () => {
  /**
   * Список состояния продуктов в корзине в виде массива.
   * @constant basketState List of product status in the basket as an array
   */
  const basketState = basket.basketState;

  /**
   * Функция считает общее количество товара в корзине.
   * @function totalProductsQuantity The function calculates the total quantity of goods in the basket.
   */
  const totalProductsQuantity = () =>
    basket.basketState.reduce((acc, cur) => acc + cur.quantity, 0);

  // Hook Отслеживает изменения в общем количестве товаров.
  // Hook Track changes in the total quantity of goods
  const [productsQuantity, setBasket] = useState(totalProductsQuantity());
  /**
   * Функция изменяет общее количество товаров.
   * @function changeTotalQuantity The function changes the total quantity of goods.
   */
  const changeTotalQuantity = () => {
    setBasket(totalProductsQuantity());
  };

  /**
   * Функция вычисляет общую стоимость товаров в корзине.
   * @function total The function calculates the total cost of goods in the basket.
   */
  const totalCost = () => basketState.reduce((acc, cur) => acc + cur.sum, 0);

  /**
   * Функция формирует список товаров в корзине.
   * @function renderBasket The function creates a list of goods in the basket
   */
  const renderBasket = () =>
    basket.basketProducts.map((product) => {
      return (
        <BasketItem
          key={product.id}
          item={product}
          initialBasketState={basket.basketState}
          // FIXME: TODO: функция должна увеличивать количество товаров в корзине через корзину
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          changeQuantity={changeTotalQuantity}
        />
      );
    });

  return (
    <div className='flex'>
      <section className='w-2/3 mx-auto p-2 bg-gray-200'>
        {renderBasket()}
      </section>
      <section className='w-1/3 p-2'>
        <div className='w-full h-full border border-gray-400 p-4'>
          <p className='font-medium mb-4'>Всего товаров: {productsQuantity}</p>
          <p className='font-bold'>Товары на сумму: {totalCost()} ₽</p>
        </div>
      </section>
    </div>
  );
};
