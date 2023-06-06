import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import pizzas from './slices/pizzaSlice';

export const store = configureStore({
  reducer: {
    filter,
    pizzas,
  },
});
