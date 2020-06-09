import React from 'react';
import { NavLink } from 'react-router-dom';

import basketIcon from 'assets/icon/shopping-cart.svg';

/**
 * Компонент открывает страницу корзины товаров.
 * The component opens the cart page
 */
export const OpenBasket = () => {
  const onBasket = () => {};

  return (
    <NavLink to='/basket' type='button' className='btn btn:hover btn-v-icon leading-none ' onClick={onBasket}>
      <span>
        <img className='mr-2' src={basketIcon} alt='' />
      </span>
      <span>Корзина</span>
    </NavLink>
  );
};
