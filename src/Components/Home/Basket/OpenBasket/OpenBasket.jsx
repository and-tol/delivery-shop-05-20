import React from 'react'
import { NavLink } from 'react-router-dom';

/**
 * Компонент открывает страницу корзины товаров
 */
export const OpenBasket = () => {

  const onBasket = () => {}

  return (
    <NavLink to='/basket' type='button' className='btn btn:hover leading-none' onClick={onBasket}>
      Корзина
    </NavLink>
  );
};
