import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppeScene: false,
  forestScene: false,
};

const userInputSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    update(state, action) {
      state.shoppeScene = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleForestScene,
  forestSceneOff,
  toggleShoppeScene,
  shoppeSceneOff,
} = userInputSlice.actions;
export default userInputSlice.reducer;
