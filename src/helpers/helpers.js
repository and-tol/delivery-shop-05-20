import data from 'data/data.json';

/**
 * Функция создает объект по индексу с количеством и суммой продукта уже находящегося в корзине.
 * The function creates an object by index with the quantity and sum of the product already in the basket.
 * @param {String} id - ID продукта в корзине. Product ID in basket
 * @param {Object} basket - объект состояния корзины и перечень продуктов в корзине. basket status object and list of products in the basket
 * @returns {Object} - количество и сумма товара уже находящегося в корзине. quantity and amount
 */
export const helperBasket = (id, basket) => {

  return {
    /**
     * ID товара уже находящееся в корзине.
     * Product ID already in the basket
     */
    indxState: basket.basketState.findIndex((el) => el.id === id),
    /**
     * Количество конкретного по ID товара уже находящееся в корзине.
     * The quantity of a specific product ID already in the basket
     */
    get prevQuantity() {
      if (this.indxState === -1) {
        return 0;
      }
      return basket.basketState[this.indxState].quantity;
    },
    /**
     * ID товара в базе данных.
     * Product ID in the database
     */
    indxProducts: basket.basketProducts.findIndex((el) => el.id === id),
    get prevSum() {

      if (this.indxState === -1) {
        let product = {};
        for (const key in data) {
          product = data[key].find((el) => el.id === id);
        }
        // FIXME: проверка на отсутствие товара в корзине
        return product.price;
      }
      return basket.basketState[this.indxState].sum;
    },
  };
};

/**
 * Функция возвращает строку без последних пять символов
 * @param {string} x
 */
export const slicer = (x) => x.slice(0, -5);
