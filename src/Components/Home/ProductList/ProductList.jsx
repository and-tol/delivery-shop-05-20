// @ts-nocheck
import React from 'react';
import { Product } from './Product';

// Данные о товаре
import data from 'data/data.json';

/**
 * Компонент карточки продукта
 */
export const ProductList = (props) => {
  console.log('ProductList props>>>', props);
  /**
   * Название партнера, передаваемое при клике на карточку этого партнера
   */
  const partnerName = props.location.state.name;

  /**
   * Данные о продукте конкретного партнера.
   */
  let currentProductsData = [];
  for (const key in data) {
    if (key === partnerName) {
      currentProductsData = data[partnerName];
    }
  }

  /**
   * Функция отрисовывает карточки с продукцией
   */
  const renderCardsProducts = () =>
    currentProductsData.map((card) => (
      <Product
        key={card.id}
        item={card}
        partnerName={partnerName}
      />
    ));

  return (
    <section>
      <h3 className='my-8 text-3xl font-bold'>{partnerName}</h3>
      <div className='flex flex-wrap'>{renderCardsProducts()}</div>
    </section>
  );
};
