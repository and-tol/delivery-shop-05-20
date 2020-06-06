import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProductList } from './ProductList/ProductList';
import { PartnersList } from './PartnersList/PartnersList';
import { Basket } from './Basket/Basket';

import { Layout} from 'antd';
import styles from './Home.module.css';
import partners from 'data/partners.json';
import { Wrapper } from './../../UI/Wrapper';
import { OpenBasket } from './Basket/OpenBasket/OpenBasket';

const { Header, Footer, Sider, Content } = Layout;

/**
 * Компонент домашней страницы
 */
export const Home = (props) => {

  /**
   * Функция перехода на главную/домашнюю страницу
   */
  const goToHomePage = () => {
    props.history.push({pathname: '/'})
  };

  return (
    <Layout>
      <Header>
        <Wrapper>
          <span>Header</span>
          <button className='btn btn:hover' onClick={goToHomePage}>
            На главную
          </button>
          <OpenBasket />
          {/* <button type='button' className='btn btn:hover leading-none'>
            Корзина
          </button> */}
        </Wrapper>
      </Header>
      <Layout className={styles.height}>
        <Sider>Sider</Sider>
        <Content className='pl-40'>
          {/* <Basket /> */}
          <Switch>
            <Route path='/' exact component={PartnersList} />
            <Route path='/basket' component={Basket} />
            {/* <PartnerList /> */}
            <Route path='/partners/:partnerName' exact render={(props) => <ProductList {...props} />} />
            <Route render={() => <h1 style={{ color: 'grey', textAlign: 'center' }}>404: страница не найдена</h1>} />
          </Switch>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};
