import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

// const { Meta } = Card;

export const Product = (props) => {
  const { name, description, price, image } = props.item;


  const [isFlipped, changeFlipped] = useState(false);

  const clickProductCard = () => {
    changeFlipped(!isFlipped);
  };

  // require('../../../../img/pizza-burger/pizza-caesar.jpg')
  // process.env.PUBLIC_URL + '/logo.png'
  // {require(`${image}`)}

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <article className='card' onClick={clickProductCard}>
          <img src={process.env.PUBLIC_URL + '/' + image} alt={name} className='w-full' />
          <div className='px-6 py-4'>
            <div className='py-2'>
              <h4 className='card_title'>{name}</h4>
            </div>

            <div className='py-4'>
              <button className='btn btn:hover mr-4'>
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
              <button className='btn btn:hover mr-4'>
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
