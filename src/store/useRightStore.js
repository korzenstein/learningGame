import { create } from "zustand";

const useRightStore = create((set, get) => ({
  rightStage: false,
  mapScene: true,
  adventure: "church",

  toggleRightStage: () => {
    const currentState = get();
    set({ rightStage: !currentState.rightStage });
  },

  mapSceneOff: () => set({ mapScene: false }),

  toggleMapScene: () => {
    const currentState = get();
    set({ mapScene: !currentState.mapScene });
  },

  chooseAdventure: (adventure) => set({ adventure }),
}));

export default useRightStore;
