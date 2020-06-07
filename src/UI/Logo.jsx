import React from 'react'
import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <div>
      <NavLink to='/'>
        <img width="60" src={`${process.env.PUBLIC_URL}/img/food_express.svg`} alt='' />
      </NavLink>
    </div>
  );
}
