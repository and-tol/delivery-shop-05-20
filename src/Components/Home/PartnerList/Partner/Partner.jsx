import React from 'react';

export const Partner = (props) => {
  const { name, time_of_delivery: timeOfDelivery, stars, price, kitchen, image, products } = props.item;

  return (
    <article className='max-w-xs rounded overflow-hidden shadow-lg  cursor-pointer'>
      <img src={image} alt={name} className='w-full' />
      <div className='px-6 py-4'>
        <div>
          <h3 className='font-bold text-xl mb-2'>{name}</h3>
          <span className=''>{timeOfDelivery} мин</span>
        </div>
        <div className='flex px-6 py-4'>
          <div className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>{stars}</div>
          <div className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            От {price} ₽
          </div>
          <div className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>{kitchen}</div>
        </div>
      </div>
    </article>
  );
};
