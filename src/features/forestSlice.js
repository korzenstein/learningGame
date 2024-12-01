import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sleepyGhost: false,

};

const forestSlice = createSlice({
  name: "forest",
  initialState,
  reducers: {
    toggleSleepy(state) {
      state.sleepyGhost = !state.sleepyGhost;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { toggleSleepy } =
  forestSlice.actions;
export default forestSlice.reducer;
