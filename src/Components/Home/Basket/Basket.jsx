import React, { useState } from 'react';
import { BasketItem } from './BasketItem/BasketItem';
import {
  // basket,
  changeQuantity,
  // removeAllProductCount,
  removeProduct,
} from '../../../basket-data/basket-data';

/**
 * Компонент корзины с товарами.
 * @component Component of the basket of goods
 */
export const Basket = (props) => {
  // console.log('props', props);
  /**
   * Список состояния продуктов в корзине в виде массива.
   * @constant basketState List of product status in the basket as an array
   */
  const basket = props.basket;
  const basketState = basket.basketState;

  /**
   * Функция считает общее количество товара в корзине.
   * @function totalProductsQuantity calculates the total quantity of goods in the basket.
   */
  const totalProductsQuantity = (basketState) => {
    console.log('basketState', basketState);
    return basketState.reduce((acc, cur) => acc + cur.quantity, 0);
  };

  // Hook Отслеживает изменения в общем количестве товаров.
  // Hook Track changes in the total quantity of goods
  const [productsQuantity, setQuantityProducts] = useState(
    totalProductsQuantity(basketState)
  );

  /**
   * Функция изменяет общее количество товаров.
   * @function changeTotalQuantity changes the total quantity of goods.
   */
  const changeTotalQuantity = (basketState) => {
    setQuantityProducts(totalProductsQuantity(basketState));
  };

  /**
   * Функция вычисляет общую стоимость товаров в корзине.
   * @function total calculates the total cost of goods in the basket.
   */
  const totalCost = () => basketState.reduce((acc, cur) => acc + cur.sum, 0);

  // ! -------------
  // ? переместить в компонет Home
  // Hook Отслеживает удаление всего количества какого-то одного товара
  // Hook Monitors the removal of the entire quantity of one product.

  // const [newBasket, setNewBasket] = useState(basket);

  // const handleRemoveProduct = (id, basket) => {
  //   setNewBasket(removeProduct(id, basket));
  // };
  // ! -------------

  /**
   * Функция формирует список товаров в корзине.
   * @function renderBasket creates a list of goods in the basket
   */
  const renderBasket = () =>
    basket.basketProducts.map((product) => {
      return (
        <BasketItem
          key={product.id}
          item={product}
          basket={basket}
          changeTotalQuantity={changeTotalQuantity}
          changeQuantity={changeQuantity}
          removeProduct={removeProduct}
          // handleRemoveProduct={handleRemoveProduct}
        />
      );
    });

  return (
    <div className='flex'>
      <section className='w-2/3 mx-auto p-2 bg-gray-200'>
        {basket.basketProducts.length > 0 ? (
          renderBasket()
        ) : (
          <p>Корзина пуста</p>
        )}
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
