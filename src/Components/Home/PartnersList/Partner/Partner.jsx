import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// @ts-ignore
import { slicer } from 'helpers/helpers';

/**
 * Компонент одной карточки партнера
 */
const Partner = (props) => {
  const { name: partnerName, time_of_delivery: timeOfDelivery, stars, price, kitchen, image, products } = props.item;

  /**
   * конфигурация URL адреса
   */
  const productLink = {
    pathName: `/${slicer(products)}`,
    // search: `?${products.slice(0, -5)}`,
  };

  // '../../../../img/gusi-lebedi/preview.jpg';
  // require('../../../../' + image);
  // process.env.PUBLIC_URL + '/logo.png'

  /**
   * По клику на карточку партнера переход на страницу с продукцией этого партнера == меняется адрес страницы
   */
  const goToPage = () => {
    props.history.push({
      pathname: `/partners${productLink.pathName}`,
    });
    // props.match.params.name
  };

  return (
    <NavLink
      to={{ productLink, state: { name: partnerName } }}
      className='card'
      onClick={goToPage}
      partnername={partnerName}>
      <img src={`${process.env.PUBLIC_URL}/${image}`} alt={partnerName} className='w-full' />
      <div className='px-6 py-4'>
        <div>
          <h3 className='card_title'>{partnerName}</h3>
          <span className='tag'>{timeOfDelivery} мин</span>
        </div>
        <div className='flex flex-wrap py-4'>
          <div className='tag'>{stars}</div>
          <div className='tag'>От {price} ₽</div>
          <div className='tag'>{kitchen}</div>
        </div>
      </div>
    </NavLink>
  );
};

export default withRouter(Partner);

const Partner = (props) => {
  //По клику на карточку переход на страницу с продукцией конкретного партнера
  const goToPage = () => {
    props.history.push({
      pathname: `/partners${productLink.pathName}`,
    });
  };

  return <NavLink onClick={goToPage}></NavLink>;
};
