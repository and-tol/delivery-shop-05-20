import React from 'react'

export const Wrapper = (props) => {
  return <div className='container mx-auto h-full bg-gray-400 flex justify-around items-center'>{props.children}</div>;
};
