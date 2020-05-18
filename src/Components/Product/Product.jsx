import React from 'react';
import image from '../../data/data-img/pizza-burger/pizza-caesar.jpg';


export const Product = () => {
  return (
    <article>
      <img src={image} alt={'caesar'} className='card-image' />
      <div className='card-text'>
        <div className='card-heading'>
          <h3 className='card-title'>{'Caesar'}</h3>
          <span className='card-tag tag'>{'timeOfDelivery'} мин</span>
        </div>
        <div className='card-info'>
          <div className='rating'>{'stars'}</div>
          <div className='price'>От {'price'} ₽</div>
          <div className='category'>{'kitchen'}</div>
        </div>
      </div>
    </article>
  );
}
