import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  animalChoice: "",
  foxString: "",
  badgerString: "",
  moodbirdString: "",
  fox: false,
  badger: false,
  moodbird: false,
  cartobird: false,
  forestbird: false,
  title: false,
};

const animalSlice = createSlice({
  name: "animal",
  initialState,
  reducers: {
    toggleAnimals(state, action) {
      if (action.payload.animal === "fox") {
        state.fox = !state.fox;
        state.badger = false;
        state.moodbird = false;
      } else if (action.payload.animal === "badger"){
        state.badger = !state.badger;
        state.fox = false;
        state.moodbird = false;
      } else if (action.payload.animal === "moodbird") {
        state.moodbird = !state.moodbird;
        state.badger = false;
        state.fox = false;
      } else if (action.payload.animal === "forestbird") {
        // state.forestbird = !state.forestbird;
        state.badger = false;
        state.moodbird = false;
      } else if (action.payload.animal === "cartobird") {
        state.cartobird = !state.cartobird;
        state.badger = false;
        state.moodbird = false;
        state.moodbird = false;
    }
  },

    converseFox(state, action) {
      state.foxString = action.payload;
    },
    converseBadger(state, action) {
      state.badgerString = action.payload;
    },
    converseMoodbird(state, action) {
      state.moodbirdString = action.payload;
    },

    toggleCenterStage(state) {
      state.title = !state.title
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleAnimals,
  converseMoodbird,
  converseBadger,
  converseFox,
  toggleCenterStage
} = animalSlice.actions;
export default animalSlice.reducer;