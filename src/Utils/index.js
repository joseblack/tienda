
/**
 * This function calculate total price of a new order.
 * @param {Array} products cartProducts: Array Objects
 * @returns {Number} Total price
 */
 function TotalPrice(products) {
  let sum = 0

  products.forEach(product => {
    sum += product.price
  });

  return sum
}

export  { TotalPrice }
