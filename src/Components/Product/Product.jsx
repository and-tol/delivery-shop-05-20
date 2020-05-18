import React, {useState} from 'react';
import image from '../../data/img/pizza-burger/pizza-dacha.jpg';

import { Card, Button } from 'antd';
const { Meta } = Card;

export const Product = (props) => {
  const { id, name, description, price, imageA } = props.data[0];

  // let title = name
  const [title, changeTitle] = useState(name)

  const clickProductCard = () => {
    // title = 'Clicked';
    changeTitle('Clicked');
    console.log('click Card')
  }

  return (
    <Card key={id} hoverable style={{ width: 280 }} cover={<img alt={name} src={image} />} onClick={clickProductCard}>
      <Meta title={title} description={description} />
      <div>
        <Button>
          <span>В корзину</span>
          <span className='button-cart-svg'></span>
        </Button>
        <strong>{price} ₽</strong>
      </div>
    </Card>
  );
};
