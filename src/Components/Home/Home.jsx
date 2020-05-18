import React from 'react';
import { ProductList } from './ProductList/ProductList';
import { PartnerList } from './PartnerList/PartnerList';

import { Layout } from 'antd';
import styles from './Home.module.css';
const { Header, Footer, Sider, Content } = Layout;

export const Home = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout className={styles.height}>
        <Sider>Sider</Sider>
        <Content>
          <div>
            <h2>Продукция</h2>
            <ProductList />
          </div>


            <PartnerList />

        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};
