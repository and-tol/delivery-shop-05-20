import React from 'react';
import {Route} from  'react-router-dom'
import { ProductList } from './ProductList/ProductList';
import { PartnersList } from './PartnersList/PartnersList';
import { Basket } from './Basket/Basket';

import { Layout } from 'antd';
import styles from './Home.module.css';
import partners from 'data/partners.json';

const { Header, Footer, Sider, Content } = Layout;

/**
 * Компонент домашней страницы
 */
export const Home = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout className={styles.height}>
        <Sider>Sider</Sider>
        <Content className='pl-40'>
          {/* <Basket /> */}
          <Route path='/' exact component={PartnersList} />
          {/* <PartnerList /> */}
          <Route
            path='/partners/:partnerName' exact
            render={(props) => <ProductList partners={partners} {...props}/> }
          />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};
