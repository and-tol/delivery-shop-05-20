import React from 'react';
import { Product } from '../Product/Product';

import { Layout } from 'antd';
import styles from './Home.module.css';
const { Header, Footer, Sider, Content } = Layout;

const data = [
  {
    id: 'pb01',
    name: 'Пицца от Шеф-повара',
    description: 'Сыр моцарелла, помидоры, салями, бекон, сыр пармезан, зелень, ветчина',
    price: 638,
    image: './../../data/img/pizza-burger/pizza-dacha.jpg',
    // image: 'img/pizza-burger/pizza-dacha.jpg',
  },

  {
    id: 'pb02',
    name: 'Пицца Мясное ассорти',
    description: 'Сыр моцарелла, фирменный соус, помидоры, куриная грудка, бекон, свинина, говядина, зелень',
    price: 693,
    // image: 'img/pizza-burger/pizza-meat.jpg',
  },
];

export const Home = () => {

  const renderCardsProducts = () => data.map(card => <Product key={card.id} item={card} />);


  return (
    <Layout>
      <Header>Header</Header>
      <Layout className={styles.height}>
        <Sider>Sider</Sider>
        <Content>
          <h2> Content</h2>
          {renderCardsProducts()}
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};
