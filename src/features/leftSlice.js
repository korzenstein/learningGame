import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppeScene: false,
  forestScene: false,
};

const leftSlice = createSlice({
  name: "left",
  initialState,
  reducers: {
    toggleShoppeScene(state) {
      state.shoppeScene = !state.shoppeScene;
    },
    shoppeSceneOff(state) {
      state.shoppeScene = false;
    },
    toggleForestScene(state) {
      state.forestScene = !state.forestScene;
    },
    forestSceneOff(state) {
      state.forestScene = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleForestScene,
  forestSceneOff,
  toggleShoppeScene,
  shoppeSceneOff,
} = leftSlice.actions;
export default leftSlice.reducer;
