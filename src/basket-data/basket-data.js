import { helperBasket, findProductById } from 'helpers/helpers';
import data from 'data/data.json';

/**
 * Содержимое корзины.
 * @constant {object} - Basket contents
 */
export const basket = {
  basketState: [],
  basketProducts: [],
};

/**
 * Функция создает (переписывает старый) новый список/массив состояния корзины после увеличения или уменьшения количества в basketState.
 * @function newBasketState creates (rewrites the old one) a new basket state list/array after changing the quantity
 * @param {number} indxState - индекс товара, подлежащий изменению. item index to be changed
 * @param {object} currentProduct - продукт, подлежащий изменению в basketState
 * @param {array} prevState - предыдущее состояние корзины
 * @returns {array} - новое состояние корзины
 */
export const newBasketState = (indxState, currentProduct, prevState) => {
  if (indxState === -1) {
    return [
      ...prevState.slice(0, prevState.length),
      currentProduct,
      ...prevState.slice(prevState.length + 1),
    ];
  }

  return [
    ...prevState.slice(0, indxState),
    currentProduct,
    ...prevState.slice(indxState + 1),
  ];
};

/**
 * Функция увеличивает в корзине количество товара конкретной позиции.
 * @function increaseQuantity increases the quantity of the product in the basket
 * @param {string} - ID товара. ID of product
 * @param {String} - Sign of arithmetic operation
 */
export const changeQuantity = (id, sign) => {
  /**
   * Продукт уже находящийся в корзине.
   * @constant {object} indexes The product already in the basket
   */
  const indexes = helperBasket(id, basket);

  /**
   * Индекс товара уже находящегося в корзине
   * @constant {string} - Index of the product already in the basket
   */
  const indxState = indexes.indxState;
  /**
   * Количество товара уже находящегося в корзине
   * @constant {number} prevQuantity Quantity of the product already in the basket
   */
  const prevQuantity = indexes.prevQuantity;
  /**
   * Цена товар уже находящегося в корзине
   * @constant {number} productPrice Price of the product already in the basket
   */
  const productPrice = findProductById(id, data).price;

  /**
   * @function operation Make arithmetic operation
   * @param {String} sign Sign of ariеthmetic operation
   */
  const operation = (sign) => {
    switch (sign) {
      case '+':
        return prevQuantity + 1;
      case '-':
        return prevQuantity - 1;
    }
  };

  /**
   * Продукт для изменения в корзине.
   * @constant {object} currentProduct Product to change in basket
   */
  const currentProduct = {
    id,
    quantity: operation(sign),
    sum: productPrice * operation(sign),
  };

  /**
   * Новый список продуктов в корзине
   * @param {Array} basketState New list of basket state
   */
  basket.basketState = newBasketState(
    indxState,
    currentProduct,
    basket.basketState
  );
};
console.log('basket.basketState>>>', basket.basketState);

// * basketProducts
/**
 * Функция добавляет товар в корзину в basketProducts
 * @function addProduct adds the product to the basket in basketProducts
 * @param {string} id - ID the adding products
 * @param {object} data - all products
 */
export const addProduct = (id, data) => {
  /**
   * Проверка наличия позиции товара в корзине
   * @constant {boolean} Checking the availability of the product in the basket
   */
  const isExistingProduct = basket.basketProducts.some(
    (product) => product.id === id
  );

  //TODO реализовать с помощью Set
  if (!isExistingProduct) {
    /**
     * Продукт, добавляемый в корзину.
     * @constant {object} addingProduct Product added to the basket
     */
    const addingProduct = findProductById(id, data);
    basket.basketProducts = [...basket.basketProducts, addingProduct];
  }
  basket.basketProducts = [...basket.basketProducts];
};

/**
 * Функция удаляет товар из корзины в basketProducts.
 * @function removeProduct removes goods from basket in basketProducts
 * @param {string} id - ID удаляемого продукта
 * @param {array} prevBasketProducts - наименования продуктов, которые уже есть в корзине
 */
export const removeProduct = (id, prevBasketProducts) => {
  /**
   * Индекс удаляемого продукта.
   * @constant {string} - Index The Removing Product
   */
  const indx = prevBasketProducts.findIndex((product) => product.id === id);

  /**
   * Новый список продуктов в корзине.
   * @constant {array} - New product list in the basket
   */
  const newBasketProducts = [
    ...prevBasketProducts.slice(0, indx),
    ...prevBasketProducts.slice(indx + 1),
  ];

  basket.basketProducts = newBasketProducts;
};

/**
 * @function deleteAllProduct - Function delete all quantity of product
 */
export const removeAllProduct = (id) => {
  console.log('deleteAll');
};
