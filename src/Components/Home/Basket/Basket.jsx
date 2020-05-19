import React from 'react';
import { BasketItem } from './BasketItem/BasketItem';

const inBasket = [
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
];

export const Basket = () => {
  const renderBasket = () => inBasket
    .map((product) => <BasketItem key={product.id} item={product} />);

  return <section className='container mx-auto p-2 bg-gray-200'>{renderBasket()}</section>;
};
