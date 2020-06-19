import data from 'data/data.json';

/**
 * Функция ищет продукт по ID в базе данных.
 * The function searches for a product by ID in the database
 * @param {string} id - ID добавляемого в корзину продукта. ID of the product to adding to the basket.
 * @param {object} data - база данных.database
 * @returns {object} - найденный в базе данных продукт. The product found in the database
 */
export const findProductById = (id, data) => {
  return data[Object.keys(data).filter((partner) => data[partner].find((product) => product.id === id))].find((product) => product.id === id);
};

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
     * ID товара уже находящегося в корзине.
     * Product ID already in the basket
     */
    indxState: basket.basketState.findIndex((product) => product.id === id),
    /**
     * Количество конкретного по ID товара уже находящегося в корзине.
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

    /**
     * Функция возвращает сумму позиции товара в корзине.
     * The function returns the sum of the product position in the basket.
     * @returns {number}
     */
    get prevSum() {
      // проверка на отсутствие товара в корзине
      if (this.indxState === -1) {
        // * variant 1
        // const partner = Object.keys(data)
        //   .filter((partner) => data[partner]
        //     .find((product) => product.id === id));
        // const product = data[
        //   Object.keys(data).filter((partner) => data[partner].find((product) => product.id === id))
        // ].find((product) => product.id === id);

        const product = findProductById(id, data);

        // * variant 2
        // let product = {}
        // for (const partner in data) {
        //   let result = data[partner].find((product) => product.id === id);

        //   if (result) {
        //     product = result;
        //   }
        // }

        return product.price;
      }
      return basket.basketState[this.indxState].sum;
    },
  };
};

/**
 * Функция возвращает строку без последних пяти символов.
 * The function returns a value without the last five characters.
 * @param {string} x
 */
export const slicer = (x) => x.slice(0, -5);
