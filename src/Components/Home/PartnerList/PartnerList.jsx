import React from 'react'
import { Partner } from './Partner/Partner';

/**
 * Данные о партнерах
 */
const partners = [
  {
    id: "1a",
    name: 'Пицца Плюс',
    time_of_delivery: 50,
    stars: 4.5,
    price: 900,
    kitchen: 'Пицца',
    image: 'img/pizza-plus/preview.jpg',
    products: 'pizza-plus.json',
  },
  {
    id: "2b",
    name: 'Тануки',
    time_of_delivery: 60,
    stars: 4.3,
    price: 1200,
    kitchen: 'Суши, роллы',
    image: 'img/tanuki/preview.jpg',
    products: 'tanuki.json',
  },
];

export const PartnerList = () => {
  const renderCardsPartner = () => partners.map((card) => <Partner key={card.id} item={card} />);

  return (
    <>
      <h2 className='text-3xl font-bold my-8'>Рестораны</h2>
      {renderCardsPartner()}
    </>
  );
}
