import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { basket, setBasketState } from 'basket-data/basket-data';
import { increaseQuantity, newBasketState } from '../../../../basket-data/basket-data';
console.log('basket>>>', basket);
/**
 * Компонент карточки товара
 */
export const Product = (props) => {
  const { id, name, description, price, image } = props.item;

  const [isFlipped, changeFlipped] = useState(false);
  /**
   * Функция "переворачивает карточку"
   */
  const clickProductCard = () => {
    changeFlipped(!isFlipped);
  };
  // {require(`${image}`)}

  /**
   * Функция добавляет товар в корзину
   */
  const addToBasket = () => {
    const isExistingProduct = basket.basketProducts.includes((item) => item.id === id);

    increaseQuantity(id)
    console.log('in basket>>>', basket)

  };

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <article className='card' onClick={clickProductCard}>
          <img src={`${process.env.PUBLIC_URL}/${image}`} alt={name} className='w-full' />
          <div className='px-6 py-4'>
            <div className='py-2'>
              <h4 className='card_title'>{name}</h4>
            </div>

            <div className='py-4'>
              <button className='btn btn:hover mr-4' onClick={addToBasket}>
                <span className='mr-1'>В корзину</span>
                <span className='button-cart-svg'></span>
              </button>
              <div className='tag'>{price} ₽</div>
            </div>
          </div>
        </article>

        <article className='card' onClick={clickProductCard}>
          <img src={process.env.PUBLIC_URL + '/' + image} alt={name} className='w-full' />
          <div className='px-6 py-4'>
            <div className='py-4'>
              <div>{description}</div>
            </div>

            <div className='py-4'>
              <button className='btn btn:hover mr-4' onClick={addToBasket}>
                <span className='mr-1'>В корзину</span>
                <span className='button-cart-svg'></span>
              </button>
              <strong className='tag'>{price} ₽</strong>
            </div>
          </div>
        </article>
      </ReactCardFlip>
    </div>
  );
};
