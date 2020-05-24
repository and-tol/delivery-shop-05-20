import React from 'react';
import { Product } from './Product';

/**
 * Данные о товаре
 */
const data = [
  {
    id: 'pb01',
    name: 'Пицца от Шеф-повара',
    description: 'Сыр моцарелла, помидоры, салями, бекон, сыр пармезан, зелень, ветчина',
    price: 638,
    image: './../../data/img/pizza-burger/pizza-dacha.jpg',
    // image: 'img/pizza-burger/pizza-dacha.jpg',
  },

  {
    id: 'pb02',
    name: 'Пицца Мясное ассорти',
    description: 'Сыр моцарелла, фирменный соус, помидоры, куриная грудка, бекон, свинина, говядина, зелень',
    price: 693,
    // image: 'img/pizza-burger/pizza-meat.jpg',
  },
];



/**
 * Компоннент для всех карточек продукции
 */
export const ProductList = () => {
  /**
   * Функция отрисовывает карточки с продукцией
   */
  const renderCardsProducts = () => data.map((card) => <Product key={card.id} item={card} />);
  
  return (
    <>
      <h2>PizzaBurger</h2>
      {renderCardsProducts()}
    </>
  );
};
