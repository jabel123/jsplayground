// 8kyu price of mangoes

const mango = (quantity, price) => (quantity - parseInt(quantity / 3)) * price;


/**
 * best solution
 * function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3))
*/