import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  animalChoice: "",
  foxString: "",
  badgerString: "",
  moodbirdString: "",
  fox: false,
  badger: false,
  moodbird: false,
  title: false,
};

const animalSlice = createSlice({
  name: "animal",
  initialState,
  reducers: {
    chooseAnimal(state, action) {
      state.animalChoice = action.payload;
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
    toggleFox(state) {
      state.fox = !state.fox;
    },
    foxOff(state) {
      state.fox = false;
    },
    toggleBadger(state) {
      state.badger = !state.badger;
    },
    badgerOff(state) {
      state.badger = false;
    },
    toggleMoodbird(state) {
      state.moodbird = !state.moodbird;
    },
    moodbirdOff(state) {
      state.moodbird = false;
    },
    toggleCenterStage(state) {
      state.title = !state.title
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  chooseAnimal, 
  toggleFox,
  toggleBadger,
  toggleMoodbird,
  foxOff,
  badgerOff,
  moodbirdOff,
  converseMoodbird,
  converseBadger,
  converseFox,
  toggleCenterStage
} = animalSlice.actions;
export default animalSlice.reducer;