import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mushrooms: 10,
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    increment: (state) => {
      state.mushrooms += 1;
    },
    decrement: (state) => {
      state.mushrooms -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = inventorySlice.actions;
export default inventorySlice.reducer;
