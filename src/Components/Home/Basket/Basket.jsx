import React from 'react';
import { BasketItem } from './BasketItem/BasketItem';

const inBasket = {
  inBasketState: [
    { id: 'pp02', quantity: 1 },
    { id: 'pp01', quantity: 1 },
    { id: 'pb02', quantity: 1 },
    { id: 'pb01', quantity: 3 },
  ],

  inBasketProducts: [
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

export const Basket = () => {
  const updateData = (price, count) => {
    let a = price * count;
  };

  /**
   * Функция увеличивает в корзине количество товара конкретной позиции
   * The function increases the quantity of the product in the basket
   * @param {string} id - ID конкретного продукта в корзине
   */
  const increaseQuantity = (id) => {
    const indx = inBasket.inBasketState.findIndex((el) => el.id === id);
    const prevQuantity = inBasket.inBasketState[indx].quantity;

    const currentProduct = {
      id: id,
      quantity: prevQuantity + 1,
    };

    const newInBasketState = [
      ...inBasket.inBasketState.slice(0, indx),
      currentProduct,
      ...inBasket.inBasketState.slice(indx + 1),
    ];
  };

  console.log('increaseQuantity', increaseQuantity('pb01'));

  /**
   * Функция по id товара находит его стоимость и количество в корзине, и вычисляет общую стоимость конкретного товара
   * The function by id of the product finds its value and quantity in the basket, and calculates the total cost of a particular product
   * @param {number} id  -  товара
   */
  const totalPositionCost = (id) => {
    const indxQuantity = inBasket.inBasketState.findIndex((el) => el.id === id);
    const indxPrice = inBasket.inBasketProducts.findIndex((el) => el.id === id);

    const positionQuantity = inBasket.inBasketState[indxQuantity].quantity;
    const positionPrice = inBasket.inBasketProducts[indxPrice].price;

    return positionQuantity * positionPrice;
  };
  console.log(totalPositionCost('pb01'));

  /**
   * Функция считает общее количество товара в корзине
   * The function calculates the total quantity of goods in the basket.
   */
  const totalProductsQuantity = () => {
    return inBasket.inBasketState.reduce((acc, cur) => acc + cur.quantity, 0);
  };

  const renderBasket = () =>
    inBasket.inBasketProducts.map((product) => {
      return (
        <BasketItem key={product.id} item={product} updateData={updateData} inBasketState={inBasket.inBasketState} />
      );
    });

  return (
    <div className='container flex'>
      <section className='container w-2/3 mx-auto p-2 bg-gray-200'>{renderBasket()}</section>
      <section className='container w-1/3 p-2'>
        <div className='container w-full h-full border border-gray-400 p-4'>
          <p className='font-medium mb-4'>Всего товаров: {totalProductsQuantity()}</p>
          <p className='font-bold'>Товары на сумму: </p>
        </div>
      </section>
    </div>
  );
};
