import React from 'react';
import { NavLink } from 'react-router-dom';

import basketIcon from 'assets/icon/shopping-cart.svg';

/**
 * Компонент открывает страницу корзины товаров.
 * @component The component open the basket page
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
