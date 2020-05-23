import React, { useState } from 'react';
import { BasketItem } from './BasketItem/BasketItem';

const basket = {
  basketState: [
    { id: 'pp02', quantity: 1, sum: 450 },
    { id: 'pp01', quantity: 1, sum: 545 },
    { id: 'pb02', quantity: 1, sum: 693 },
    { id: 'pb01', quantity: 1, sum: 638 },
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
    const indxSt = basket.basketState.findIndex((el) => el.id === id);
    const prevQuantity = basket.basketState[indxSt].quantity;
    const indxQua = basket.basketProducts.findIndex((el) => el.id === id);
    const prevSum = basket.basketProducts[indxQua].price;

    const currentProduct = {
      id,
      quantity: prevQuantity + 1,
      sum: prevSum * (prevQuantity + 1) ,
    };

    const newBasketState = [
      ...basket.basketState.slice(0, indxSt),
      currentProduct,
      ...basket.basketState.slice(indxSt + 1),
    ];

    basket.basketState = newBasketState;
    basket.basketProducts = [...basket.basketProducts];
  };
  /**
   * Функция уменьшает в корзине количество товара конкретной позиции.
   * The function decreases the quantity of the product in the basket
   */
  const decreaseQuantity = (id) => {
    const indxSt = basket.basketState.findIndex((el) => el.id === id);
    const prevQuantity = basket.basketState[indxSt].quantity;
    const indxQua = basket.basketProducts.findIndex((el) => el.id === id);
    const prevSum = basket.basketProducts[indxQua].price;

    const currentProduct = {
      id,
      quantity: prevQuantity - 1,
      sum: prevSum * (prevQuantity - 1),
    };


    const newBasketState = [
      ...basket.basketState.slice(0, indxSt),
      currentProduct,
      ...basket.basketState.slice(indxSt + 1),
    ];

    basket.basketState = newBasketState;
    basket.basketProducts = [...basket.basketProducts];
  };

  const basketState = basket.basketState;

  const basketProducts = basket.basketProducts;

  // TODO : realise function this calculate total cost
  const total = () => {
    const indxArr = basketState.map((el) => {
      return el.id;
    });

    indxArr.map((indx) => basketState.findIndex(indx));

    // const indxQuantity = basketState.findIndex((el) => el.id === id);
    // const indxPrice = basketProducts.findIndex((el) => el.id === id);

    // console.log('basketState>>> ', basketState)
    // console.log('basketProducts>>> ', basketProducts)
  };

  // total()

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
    console.log('productsQuantity>>>', productsQuantity);
    console.log('basket.basketState>>>', basket.basketState);
  };

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
          productSum={productSum}
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
