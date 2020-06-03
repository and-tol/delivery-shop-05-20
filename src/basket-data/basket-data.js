import { helperBasket } from 'helpers/helpers';
import data from 'data/data.json';
/**
 * Содержимое корзины.
 * Basket contents
 */
export const basket = {
  basketState: [
    { id: 'pp02', quantity: 1, sum: 450 },
    { id: 'pp01', quantity: 1, sum: 545 },
    { id: 'pb02', quantity: 1, sum: 693 },
    { id: 'pb01', quantity: 1, sum: 638 },
  ],

  basketProducts: [
    {
      id: 'pb01',
      name: 'Пицца от Шеф-повара',
      description: 'Сыр моцарелла, помидоры, салями, бекон, сыр пармезан, зелень, ветчина',
      price: 638,
      image: 'img/pizza-burger/pizza-dacha.jpg',
    },
    {
      id: 'pb02',
      name: 'Пицца Мясное ассорти',
      description: 'Сыр моцарелла, фирменный соус, помидоры, куриная грудка, бекон, свинина, говядина, зелень',
      price: 693,
      image: 'img/pizza-burger/pizza-meat.jpg',
    },
    {
      id: 'pp01',
      name: 'Пицца Везувий',
      description: 'Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец «Халапенье», соус «Тобаско», томаты.',
      price: 545,
      image: 'img/pizza-plus/pizza-vesuvius.jpg',
    },
    {
      id: 'pp02',
      name: 'Пицца Девичник',
      description:
        'Соус томатный, постное тесто, нежирный сыр, кукуруза, лук, маслины, грибы, помидоры, болгарский перец.',
      price: 450,
      image: 'img/pizza-plus/pizza-girls.jpg',
    },
  ],
};

/**
 * Функция создает (переписывает старый) новый список/массив состояния корзины после увеличения или уменьшения количества.
 * The function creates (rewrites the old one) a new basket state list/array after changing the quantity
 * @param {number} indxState индекс товара, подлежащий изменению. item index to be changed
 * @param {object} currentProduct
 * @param {array} prevState
 * @returns {array}
 */
export const newBasketState = (indxState, currentProduct, prevState) => {

  if (indxState === -1) {
    return [
      ...prevState.slice(0, prevState.length),
      currentProduct,
      ...prevState.slice(prevState.length + 1),
    ];
  }

  return [...prevState.slice(0, indxState), currentProduct, ...prevState.slice(indxState + 1)];
};
/**
 * Функция увеличивает в корзине количество товара конкретной позиции.
 * The function increases the quantity of the product in the basket
 */
export const increaseQuantity = (id) => {
  const indexes = helperBasket(id, basket);

  console.log('basket-data>>>', basket);
  /**
   * Индекс товара уже находящегося в корзине
   * Index of the product already in the basket
   */
  const indxState = indexes.indxState;
  /**
   * Количество товара уже находящегося в корзине
   * Quantity of the product already in the basket
   */
  const prevQuantity = indexes.prevQuantity;
  /**
   * Сумма за товар уже находящегося в корзине
   * Sum of the product already in the basket
   */
  const prevSum = indexes.prevSum;

  /**
   * Продукт для добавления в корзину.
   * Product to add to cart
   */
  const currentProduct = {
    id,
    quantity: prevQuantity + 1,
    sum: prevSum * (prevQuantity + 1),
  };

  basket.basketState = newBasketState(indxState, currentProduct, basket.basketState);

  basket.basketProducts = [...basket.basketProducts];
};

// /**
//  * Функция добавляет новую позицию товара в корзине
//  * @param {*} id - ID товара
//  * @param {*} sum - сумма
//  */
// export const setBasketState = (indxSt, sum) => {
//   newBasketState(indxSt, currentProduct);
//   basket.basketState.push({
//     id,
//     quantity: 1,
//     sum,
//   });
//   console.log('helperBasket', helperBasket(id, basket));
//   console.log('setBasketState', basket.basketState);
// };
