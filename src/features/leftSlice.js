import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppeScene: false,
  forestScene: false,
  cartographScene: false,
};

const leftSlice = createSlice({
  name: "left",
  initialState,
  reducers: {
    toggleScenes(state, action) {
      if (action.payload.scene === "forest") {
        state.shoppeScene = false;
        state.forestScene = !state.forestScene;
      } else if (action.payload.scene === "shoppe"){
        state.shoppeScene = !state.shoppeScene;
        state.forestScene = false;
      } else if (action.payload.scene === "cartograph") {
        state.cartographScene = !state.cartographScene;
      } 
    },

    shoppeSceneOff(state) {
      state.shoppeScene = false;
    },
    forestSceneOff(state) {
      state.forestScene = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleScenes,
  toggleForestScene,
  forestSceneOff,
  toggleShoppeScene,
  shoppeSceneOff,
} = leftSlice.actions;
export default leftSlice.reducer;
