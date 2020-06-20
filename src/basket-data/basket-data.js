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
 * @function newBasketState The function creates (rewrites the old one) a new basket state list/array after changing the quantity
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
 * @function increaseQuantity The function increases the quantity of the product in the basket
 * @param {string} - ID товара. ID of product
 * @param {String} - Sign of arithmetic operation
 */
export const changeQuantity = (id, sign) => {
  /**
   * Количество и сумма продукта уже находящегося в корзине.
   * Quantity and sum of product already in the basket
   * @constant {object} indexes
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
   * Product to change in basket
   * @constant {object} currentProduct
   */
  const currentProduct = {
    id,
    quantity: operation(sign),
    sum: prevSum * operation(sign),
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

/**
 * Функция увеличивает в корзине количество товара конкретной позиции.
 * @function increaseQuantity The function increases the quantity of the product in the basket
 * @param {string} - ID товара. ID product
 */
export const increaseQuantity = (id) => {
  /**
   * Количество и сумма продукта уже находящегося в корзине.
   * Quantity and sum of product already in the basket
   * @constant {object} indexes
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
   * @function operation Make arithmetic operation
   * @param {String} sign Sign of ariерmetic opуration
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
   * Продукт для добавления в корзину.
   * Product to add to basket
   * @constant {object} currentProduct
   */
  const currentProduct = {
    id,
    quantity: prevQuantity + 1,
    sum: prevSum * (prevQuantity + 1),
  };

  /**
   * @param {Array} basketState New list of basket state
   */
  basket.basketState = newBasketState(
    indxState,
    currentProduct,
    basket.basketState
  );
};

/**
 * Функция уменьшает в корзине количество товара конкретной позиции.
 * @function decreaseQuantity The function decreases the quantity of the product in the basket
 */
export const decreaseQuantity = (id) => {
  /**
   * Количество и сумма продукта уже находящегося в корзине.
   * Quantity and sum of product already in the basket
   * @constant {object} indexes
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
   * Product to add to basket
   * @constant {object} currentProduct
   */
  const currentProduct = {
    id,
    quantity: prevQuantity - 1,
    sum: prevSum * (prevQuantity - 1),
  };

  /**
   * @param {Array} basketState New list of basket state
   */
  basket.basketState = newBasketState(
    indxState,
    currentProduct,
    basket.basketState
  );

  // basket.basketState = newBasketState(indxSt, currentProduct);
  // basket.basketProducts = [...basket.basketProducts];
};

// * basketProducts
/**
 * Функция добавляет товар в корзину в basketProducts
 * @function addProduct The function adds the product to the basket in basketProducts
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
  const isExistingProduct = basket.basketProducts.some(
    (product) => product.id === id
  );

  //TODO реализовать с помощью Set
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
 * @function removeProduct The function removes goods from basket in basketProducts
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
  const newBasketProducts = [
    ...prevBasketProducts.slice(0, indx),
    ...prevBasketProducts.slice(indx + 1),
  ];

  basket.basketProducts = newBasketProducts;
};
