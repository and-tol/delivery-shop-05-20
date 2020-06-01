// @ts-nocheck
import React from 'react';
import { Product } from './Product';

// import partners from 'data/partners.json';
// Данные о товаре
import data from 'data/food-band.json';

// console.log('partners>>>', partners[0].products)
/**
 * Компонент карточки продукта
 */
export const ProductList = (props) => {
  console.log('props ProductList>>>', props);

  const partnerName = props.location.state.name;

  /**
   * Функция отрисовывает карточки с продукцией
   */
  const renderCardsProducts = () => data.map((card) => <Product
      key={card.id}
      item={card}
    />);

  return (
    <section>
      <h3 className='my-8 text-3xl font-bold'>{partnerName}</h3>
      <div className='flex flex-wrap'>{renderCardsProducts()}</div>
    </section>
  );
};
