import React, { useState } from 'react';
import { BasketItem } from './BasketItem/BasketItem';
import { helperBasket } from '../../../helpers/helpers';

import { basket } from '../../../basket-data/basket';

/**
 * Компонент корзины с товарами
 * Component of the basket of goods
 */
export const Basket = () => {
  /**
   * Массив состояния продуктов в корзине
   * Array of product status in the basket
   */
  const basketState = basket.basketState;

  /**
   * Функция формирует новый массив состояния корзины после увеличения или уменьшения количества.
   * The function forms a new basket state array after changing the quantity
   * @param {string} indxSt
   * @param {object} currentProduct
   */
  const newBasketState = (indxSt, currentProduct) => [
    ...basket.basketState.slice(0, indxSt),
    currentProduct,
    ...basket.basketState.slice(indxSt + 1),
  ];

  /**
   * Функция увеличивает в корзине количество товара конкретной позиции.
   * The function increases the quantity of the product in the basket
   */
  const increaseQuantity = (id) => {
    const indexes = helperBasket(id, basket);

    const indxSt = indexes.indxSt;
    const prevQuantity = indexes.prevQuantity;
    const prevSum = indexes.prevSum;

    const currentProduct = {
      id,
      quantity: prevQuantity + 1,
      sum: prevSum * (prevQuantity + 1),
    };

    basket.basketState = newBasketState(indxSt, currentProduct);
    basket.basketProducts = [...basket.basketProducts];
  };
  /**
   * Функция уменьшает в корзине количество товара конкретной позиции.
   * The function decreases the quantity of the product in the basket
   */
  const decreaseQuantity = (id) => {
    const indexes = helperBasket(id, basket);

    const indxSt = indexes.indxSt;
    const prevQuantity = indexes.prevQuantity;
    const prevSum = indexes.prevSum;

    const currentProduct = {
      id,
      quantity: prevQuantity - 1,
      sum: prevSum * (prevQuantity - 1),
    };

    basket.basketState = newBasketState(indxSt, currentProduct);
    basket.basketProducts = [...basket.basketProducts];
  };

  /**
   * Функция считает общее количество товара в корзине.
   * The function calculates the total quantity of goods in the basket.
   */
  const totalProductsQuantity = () => basket.basketState.reduce((acc, cur) => acc + cur.quantity, 0);

  // Hooks Отслеживает изменения в общем количестве товаров.
  // Hooks Track changes in the total quantity of goods
  const [productsQuantity, setBasket] = useState(totalProductsQuantity());
  /**
   * Функция изменяет общее количество товаров.
   * The function changes the total quantity of goods.
   */
  const changeQuantity = () => {
    setBasket(totalProductsQuantity());
  };

  /**
   * Функция вычисляет общую стоимость товаров в корзине.
   * The function calculates the total cost of goods in the basket.
   */
  const total = () => basketState.reduce((acc, cur) => acc + cur.sum, 0);

  /**
   * Функция формирует список товаров корзине.
   * The function creates a list of goods in the basket
   */
  const renderBasket = () =>
    basket.basketProducts.map((product) => {
      return (
        <BasketItem
          key={product.id}
          item={product}
          initialBasketState={basket.basketState}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          changeQuantity={changeQuantity}
        />
      );
    });

  return (
    <div className='container flex'>
      <section className='container w-2/3 mx-auto p-2 bg-gray-200'>{renderBasket()}</section>
      <section className='container w-1/3 p-2'>
        <div className='container w-full h-full border border-gray-400 p-4'>
          <p className='font-medium mb-4'>Всего товаров: {productsQuantity}</p>
          <p className='font-bold'>Товары на сумму: {total()} ₽</p>
        </div>
      </section>
    </div>
  );
};
