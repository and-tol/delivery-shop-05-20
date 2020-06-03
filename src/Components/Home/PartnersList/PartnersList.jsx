import React from 'react';
import Partner  from './Partner/Partner';
/**
 * Данные о партнерах
 */
// @ts-ignore
import partners from 'data/partners.json';

/**
 * Компонент выводит список всех партнеров в виде карточек
 */
export const PartnersList = () => {
  const renderCardsPartner = () => partners.map((card) => <Partner
    key={card.name}
    item={card}
  />);

  return (
    <section className='container'>
      <h2 className='page_title'>Рестораны</h2>
      <div className='container flex flex-wrap'>
        {renderCardsPartner()}
      </div>
    </section>
  );
};
