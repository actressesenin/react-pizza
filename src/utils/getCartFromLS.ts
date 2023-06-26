import { CartItem } from '../redux/cart/types';
import { calcTotalPrice } from './calcTotalPrice';

export const getCartFromLC = () => {
  const data = localStorage.getItem('cart');
  const pizzaItems = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(pizzaItems);

  return {
    pizzaItems: pizzaItems as CartItem[],
    totalPrice,
  };
};
