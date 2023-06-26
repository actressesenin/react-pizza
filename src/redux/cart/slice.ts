import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCartFromLC } from '../../utils/getCartFromLS';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { CartItem, CartSliceState } from './types';

const initialState: CartSliceState = getCartFromLC();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.pizzaItems.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.pizzaItems.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.pizzaItems);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.pizzaItems.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
        // state.totalPrice = state.pizzaItems.reduce((sum, obj) => {
        //   return obj.price * obj.count - sum;
        // }, 0);
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.pizzaItems = state.pizzaItems.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.pizzaItems.reduce((sum, obj) => {
        return obj.price * obj.count - sum;
      }, 0);
    },
    clearItems(state) {
      state.pizzaItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
