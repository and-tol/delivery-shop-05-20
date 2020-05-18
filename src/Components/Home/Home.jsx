import React from 'react';
import { Product } from '../Product/Product';

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
          <h2> Content</h2>
          <Product />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}
