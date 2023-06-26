import { CartItem } from '../redux/cart/types';

export const calcTotalPrice = (pizzaItems: CartItem[]) => {
  return pizzaItems.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};
