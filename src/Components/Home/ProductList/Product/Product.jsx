import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import {ShoppingCartOutlined} from '@ant-design/icons';
import image from '../../../../data/img/pizza-burger/pizza-dacha.jpg';

import { Card, Button } from 'antd';
const { Meta } = Card;

export const Product = (props) => {
  const {name, description, price } = props.item;

  const [isFlipped, changeFlipped] = useState(false);

  const clickProductCard = () => {
    changeFlipped(!isFlipped);
  };

  return (
    <div style={{ width: 280}}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <Card
          hoverable
          style={{ width: 280, minHeight: 418 }}
          cover={<img alt={name} src={image} />}
          onClick={clickProductCard}>
          <Meta title={name} />
          <div>
            <Button icon={<ShoppingCartOutlined />} size={'small'}>
              <span>В корзину</span>
              {/* <span className='button-cart-svg'></span> */}
            </Button>

            <p>
              Стоимость: <strong>{price} ₽</strong>
            </p>
          </div>
        </Card>

        <Card
          hoverable
          style={{ width: 280, minHeight: 418 }}
          cover={<img alt={name} src={image} />}
          onClick={clickProductCard}>
          <Meta title='Описание' description={description} />
          <div>
            <Button icon={<ShoppingCartOutlined />} size={'small'}>
              <span>В корзину</span>
              {/* <span className='button-cart-svg'></span> */}
            </Button>
            <p>
              Стоимость: <strong>{price} ₽</strong>
            </p>
          </div>
        </Card>
      </ReactCardFlip>
    </div>
  );
};
