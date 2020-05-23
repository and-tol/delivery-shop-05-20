import React, { useState } from 'react';
import { BasketItem } from './BasketItem/BasketItem';

const basket = {
  basketState: [
    { id: 'pp02', quantity: 1 },
    { id: 'pp01', quantity: 1 },
    { id: 'pb02', quantity: 1 },
    { id: 'pb01', quantity: 1 },
  ],

  basketProducts: [
    {
      id: 'pb01',
      name: 'Пицца от Шеф-повара',
      description: 'Сыр моцарелла, помидоры, салями, бекон, сыр пармезан, зелень, ветчина',
      price: 638,
      image: 'img/pizza-burger/pizza-dacha.jpg',
    },
    {
      id: 'pb02',
      name: 'Пицца Мясное ассорти',
      description: 'Сыр моцарелла, фирменный соус, помидоры, куриная грудка, бекон, свинина, говядина, зелень',
      price: 693,
      image: 'img/pizza-burger/pizza-meat.jpg',
    },
    {
      id: 'pp01',
      name: 'Пицца Везувий',
      description: 'Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец «Халапенье», соус «Тобаско», томаты.',
      price: 545,
      image: 'img/pizza-plus/pizza-vesuvius.jpg',
    },
    {
      id: 'pp02',
      name: 'Пицца Девичник',
      description:
        'Соус томатный, постное тесто, нежирный сыр, кукуруза, лук, маслины, грибы, помидоры, болгарский перец.',
      price: 450,
      image: 'img/pizza-plus/pizza-girls.jpg',
    },
  ],
};

/**
 * Компонент корзины с товарами
 * Component of the basket of goods
 */
export const Basket = () => {
  /**
   * Функция увеличивает в корзине количество товара конкретной позиции.
   * The function increases the quantity of the product in the basket
   */
  const increaseQuantity = (id) => {
    const indx = basket.basketState.findIndex((el) => el.id === id);
    const prevQuantity = basket.basketState[indx].quantity;

    const currentProduct = {
      id: id,
      quantity: prevQuantity + 1,
    };

    const newBasketState = [
      ...basket.basketState.slice(0, indx),
      currentProduct,
      ...basket.basketState.slice(indx + 1),
    ];

    basket.basketState = newBasketState;
    basket.basketProducts = [...basket.basketProducts];

    // console.log('basket', basket);

    // return {
    //   basketState: newBasketState,
    //   basketProducts: [...basket.basketProducts],
    // };
    return newBasketState;
  };

  /**
   * Функция по id товара находит его стоимость и количество в корзине, и вычисляет общую стоимость конкретного товара.
   * The function by id of the product finds its value and quantity in the basket, and calculates the total cost of a particular product
   */
  const totalPositionCost = (id) => {
    const indxQuantity = basket.basketState.findIndex((el) => el.id === id);
    const indxPrice = basket.basketProducts.findIndex((el) => el.id === id);

    const positionQuantity = basket.basketState[indxQuantity].quantity;
    const positionPrice = basket.basketProducts[indxPrice].price;

    return positionQuantity * positionPrice;
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
  const changeTotalQuantity = () => {
    console.log('productsQuantity>>>', productsQuantity);
    setBasket(totalProductsQuantity());
  };

  const renderBasket = () =>
    basket.basketProducts.map((product) => {
      return (
        <BasketItem
          key={product.id}
          item={product}
          initialBasketState={basket.basketState}
          increaseQuantity={increaseQuantity}
          changeProductsQuantity={changeTotalQuantity}
        />
      );
    });

  return (
    <div className='container flex'>
      <section className='container w-2/3 mx-auto p-2 bg-gray-200'>{renderBasket()}</section>
      <section className='container w-1/3 p-2'>
        <div className='container w-full h-full border border-gray-400 p-4'>
          <p className='font-medium mb-4'>Всего товаров: {productsQuantity}</p>
          <p className='font-bold'>Товары на сумму: </p>
        </div>
      </section>
    </div>
  );
};
