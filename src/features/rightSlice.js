import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rightStage: false,
  mapScene: true,
  adventure: "church",
};

const rightSlice = createSlice({
  name: "right",
  initialState,
  reducers: {
    toggleRightStage(state) {
      state.rightStage = !state.rightStage;
    },
    mapSceneOff(state) {
      state.mapScene = false;
    },
    toggleMapScene(state) {
      state.mapScene = !state.mapScene;
    },
    chooseAdventure(state, action) {
      state.adventure = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleRightStage, mapSceneOff, toggleMapScene, chooseAdventure } =
  rightSlice.actions;
export default rightSlice.reducer;
