/**
 * Функция создает массив с количеством и суммой конкретного продукта по индексу для корзины.
 * The function creates an object for the basket by index with the quantity and sum of a specific product
 * @param {String} id - ID продукта в корзине. Product ID in basket
 * @param {Object} basket - объект состояния корзины и перечень продуктов в корзине. basket status object and list of products in the basket
 */
export const helperBasket = (id, basket) => {
  return {
    indxSt: basket.basketState.findIndex((el) => el.id === id),
    get prevQuantity() {
      return basket.basketState[this.indxSt].quantity;
    },
    indxQua: basket.basketProducts.findIndex((el) => el.id === id),
    get prevSum() {
      return basket.basketProducts[this.indxQua].price;
    },
  };
};

/**
 * Функция возвращает строку без послених пять символов
 * @param {string} x
 */
export const slicer = (x) => x.slice(0, -5);
