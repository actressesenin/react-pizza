import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  pizzaItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.pizzaItems.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.pizzaItems.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.pizzaItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.pizzaItems.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }
    },
    removeItem(state, action) {
      state.pizzaItems = state.pizzaItems.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.pizzaItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
