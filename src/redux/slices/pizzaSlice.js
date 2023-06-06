import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeSize: 0,
  activeType: 0,
};

const pizzaSLice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setActiveSize(state, action) {
      state.activeSize = action.payload;
    },
    setActiveType(state, action) {
      state.activeType = action.payload;
    },
  },
});

export const { setActiveSize, setActiveType } = pizzaSLice.actions;
console.log(pizzaSLice);

export default pizzaSLice.reducer;
