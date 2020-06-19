import { helperBasket, findProductById } from 'helpers/helpers';
import data from 'data/data.json';

/**
 * Содержимое корзины.
 * Basket contents
 * @constant {object}
 */
export const basket = {
  basketState: [],
  basketProducts: [],
};

/**
 * Функция создает (переписывает старый) новый список/массив состояния корзины после увеличения или уменьшения количества в basketState.
 * The function creates (rewrites the old one) a new basket state list/array after changing the quantity
 * @function newBasketState
 * @param {number} indxState - индекс товара, подлежащий изменению. item index to be changed
 * @param {object} currentProduct - продукт, подлежащий изменению в basketState
 * @param {array} prevState - предыдущее состояние корзины
 * @returns {array} - новое состояние корзины
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
 * @function increaseQuantity
 * @param {string} - ID товара. ID product
 */
export const increaseQuantity = (id) => {
  /**
   * Количество и сумма продукта уже находящегося в корзине.
   * Quantity and sum of product already in the basket
   * @constant {object}
   */
  const indexes = helperBasket(id, basket);

  /**
   * Индекс товара уже находящегося в корзине
   * Index of the product already in the basket
   * @constant {string}
   */
  const indxState = indexes.indxState;
  /**
   * Количество товара уже находящегося в корзине
   * Quantity of the product already in the basket
   * @constant {number}
   */
  const prevQuantity = indexes.prevQuantity;
  /**
   * Сумма за товар уже находящегося в корзине
   * Sum of the product already in the basket
   * @constant {number}
   */
  const prevSum = indexes.prevSum;

  /**
   * Продукт для добавления в корзину.
   * Product to add to cart
   * @constant {object}
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
 * @param {string} id - ID the adding products
 * @param {object} data - all products
 */
export const addProduct = (id, data) => {
  console.log('id addProduct>>>', id);

  /**
   * Проверка наличия позиции товара в корзине
   * Checking the availability of the product in the basket
   * @constant {boolean}
   */
  const isExistingProduct = basket.basketProducts.some((product) => product.id === id);
  console.log('isExistingProduct', isExistingProduct);

  if (!isExistingProduct) {
    /**
     * Продукт, добавляемый в корзину. Product added to the basket
     * @constant {object}
     */
    const addingProduct = findProductById(id, data);
    basket.basketProducts = [...basket.basketProducts, addingProduct];
  }
  basket.basketProducts = [...basket.basketProducts];
};

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
   * @constant {string}
   */
  const indx = prevBasketProducts.findIndex((product) => product.id === id);

  /**
   * Новый список продуктов в корзине.
   * New product list in the basket
   * @constant {array}
   */
  const newBasketProducts = [...prevBasketProducts.slice(0, indx), ...prevBasketProducts.slice(indx + 1)];

  basket.basketProducts = newBasketProducts;
};
