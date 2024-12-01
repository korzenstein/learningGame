import { create } from "zustand";

const useLeftStore = create((set, get) => ({
  shoppeScene: false,
  forestScene: false,
  cartographScene: false,

  toggleScenes: (scene) => {
    const currentState = get();
    const newState = {
      shoppeScene: false,
      forestScene: false,
      cartographScene: false,
    };

    if (scene === "forest") {
      newState.forestScene = !currentState.forestScene;
    } else if (scene === "shoppe") {
      newState.shoppeScene = !currentState.shoppeScene;
    } else if (scene === "cartograph") {
      newState.cartographScene = !currentState.cartographScene;
    }

    set(newState);
  },

  shoppeSceneOff: () => set({ shoppeScene: false }),

  forestSceneOff: () => set({ forestScene: false }),
}));

export default useLeftStore;
