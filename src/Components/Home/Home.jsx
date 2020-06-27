import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProductList } from './ProductList/ProductList';
import { PartnersList } from './PartnersList/PartnersList';
import { Basket } from './Basket/Basket';

import { basket} from './../../basket-data/basket-data';

import { Layout} from 'antd';
import styles from './Home.module.css';
import { Wrapper } from 'UI/Wrapper';
import { OpenBasket } from './Basket/OpenBasket/OpenBasket';
import { Logo } from 'UI/Logo';

const { Header, Footer, Sider, Content } = Layout;

/**
 * Компонент домашней страницы
 */
export const Home = (props) => {

  /**
   * @function goToHomePage переход на главную/домашнюю страницу
   */
  const goToHomePage = () => {
    props.history.push({pathname: '/'})
  };

    // ! -------------

  // Hook Отслеживает удаление всего количества какого-то одного товара
  // Hook Monitors the removal of the entire quantity of one product.
  // const [newBasket, setNewBasket] = useState(basket);

  // const handleRemoveProduct = (id, basket) => {
  //   setNewBasket(removeProduct(id, basket));
  // };
  // ! -------------

  return (
    <Layout>
      <Header>
        <Wrapper>
          {/* <Route path='/' component={Logo} /> */}
          <Logo />
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
          <Switch>
            <Route path='/' exact component={PartnersList} />
            <Route
              path='/basket'
              render={(props) => (
                <Basket
                  {...props}
                  basket={basket}
                  
                />
              )}
            />
            {/* <PartnerList /> */}
            <Route
              path='/partners/:partnerName'
              exact
              render={(props) => <ProductList {...props} />}
            />
            <Route
              render={() => (
                <h1 style={{ color: 'grey', textAlign: 'center' }}>
                  404: страница не найдена
                </h1>
              )}
            />
          </Switch>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};
