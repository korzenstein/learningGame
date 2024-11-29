import { create } from "zustand";

const useAnimalStore = create((set, get) => ({
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

  toggleAnimals: (animal) => {
    const currentState = get();

    const updatedState = {
      fox: false,
      badger: false,
      moodbird: false,
      cartobird: false,
      forestbird: false,
      animalChoice: animal,
    };

    if (animal === "fox") {
      updatedState.fox = !currentState.fox;
    } else if (animal === "badger") {
      updatedState.badger = !currentState.badger;
    } else if (animal === "moodbird") {
      updatedState.moodbird = !currentState.moodbird;
    } else if (animal === "forestbird") {
      updatedState.forestbird = !currentState.forestbird;
    } else if (animal === "cartobird") {
      updatedState.cartobird = !currentState.cartobird;
    }

    set(updatedState);
  },

  converseFox: (foxString) => set({ foxString }),
  converseBadger: (badgerString) => set({ badgerString }),
  converseMoodbird: (moodbirdString) => set({ moodbirdString }),

  toggleCenterStage: () => {
    const currentState = get();
    set({ title: !currentState.title });
  },
}));

export default useAnimalStore;
