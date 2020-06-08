import { helperBasket } from 'helpers/helpers';
import data from 'data/data.json';

/**
 * Содержимое корзины.
 * Basket contents
 */
export const basket = {
  basketState: [
    // { id: 'pp02', quantity: 1, sum: 450 },
    // { id: 'pp01', quantity: 1, sum: 545 },
    // { id: 'pb02', quantity: 1, sum: 693 },
    // { id: 'pb01', quantity: 1, sum: 638 },
  ],

  basketProducts: [
    // {
    //   id: 'pb01',
    //   name: 'Пицца от Шеф-повара',
    //   description: 'Сыр моцарелла, помидоры, салями, бекон, сыр пармезан, зелень, ветчина',
    //   price: 638,
    //   image: 'img/pizza-burger/pizza-dacha.jpg',
    // },
    // {
    //   id: 'pb02',
    //   name: 'Пицца Мясное ассорти',
    //   description: 'Сыр моцарелла, фирменный соус, помидоры, куриная грудка, бекон, свинина, говядина, зелень',
    //   price: 693,
    //   image: 'img/pizza-burger/pizza-meat.jpg',
    // },
    // {
    //   id: 'pp01',
    //   name: 'Пицца Везувий',
    //   description: 'Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец «Халапенье», соус «Тобаско», томаты.',
    //   price: 545,
    //   image: 'img/pizza-plus/pizza-vesuvius.jpg',
    // },
    // {
    //   id: 'pp02',
    //   name: 'Пицца Девичник',
    //   description:
    //     'Соус томатный, постное тесто, нежирный сыр, кукуруза, лук, маслины, грибы, помидоры, болгарский перец.',
    //   price: 450,
    //   image: 'img/pizza-plus/pizza-girls.jpg',
    // },
  ],
};

/**
 * Функция создает (переписывает старый) новый список/массив состояния корзины после увеличения или уменьшения количества в basketState.
 * The function creates (rewrites the old one) a new basket state list/array after changing the quantity
 * @param {number} indxState индекс товара, подлежащий изменению. item index to be changed
 * @param {object} currentProduct продукт, подлежащий изменению в basketState
 * @param {array} prevState
 * @returns {array}
 */
export const newBasketState = (indxState, currentProduct, prevState) => {
  if (indxState === -1) {
    return [...prevState.slice(0, prevState.length), currentProduct, ...prevState.slice(prevState.length + 1)];
  }

  return [...prevState.slice(0, indxState), currentProduct, ...prevState.slice(indxState + 1)];
};
/**
 * Функция увеличивает в корзине количество товара конкретной позиции.
 * The function increases the quantity of the product in the basket
 */
export const increaseQuantity = (id) => {
  /**
   * Количество и сумма продукта уже находящегося в корзине
   */
  const indexes = helperBasket(id, basket);

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
};

// * basketProducts
/**
 * Функция добавляет товар в корзину в basketProducts
 * The function adds the product to the basket in basketProducts
 * @param {string} id
 * @param {object} data
 */
export const addProduct = (id, data) => {
  /**
   * Проверка наличия позиции товара в корзине
   * Checking the availability of the product in the basket
   */
  const isExistingProduct = basket.basketProducts.includes((product) => product.id === id);
  console.log('isExistingProduct', isExistingProduct);

  /**
   * Продукт, добавляемый в корзину
   */
  let addingProduct = {};

  if (!isExistingProduct) {
    for (const partner in data) {
      addingProduct = data[partner].find((product) => product.id === id);
    }
  }

  basket.basketProducts = [...basket.basketProducts, addingProduct];
};

addProduct('tn02', data);

/**
 * Функция удаляет товар из корзины в basketProducts.
 * The function removes goods from basket in basketProducts
 * @param {string} id - ID удаляемого продукта
 * @param {array} prevBasketProducts - наименования продуктов, которые уже есть в корзине
 */
export const removeProduct = (id, prevBasketProducts) => {
  /**
   * Индекс удаляемого продукта.
   * Index The Removing Product
   */
  const indx = prevBasketProducts.findIndex((product) => product.id === id);

  /**
   * Новый список продуктов в корзине.
   * New product list in the basket
   */
  const newBasketProducts = [...prevBasketProducts.slice(0, indx), ...prevBasketProducts.slice(indx + 1)];
  basket.basketProducts = newBasketProducts;
};
