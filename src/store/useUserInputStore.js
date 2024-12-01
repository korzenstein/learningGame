import { create } from "zustand";

const useUserInputStore = create((set) => ({
  // Initial State
  shoppeScene: false,
  forestScene: false,

  // Actions to toggle and reset scenes
  toggleForestScene: () =>
    set((state) => ({ forestScene: !state.forestScene })), // Toggles the forestScene state
  forestSceneOff: () => set(() => ({ forestScene: false })), // Turns off the forestScene state
  
  toggleShoppeScene: () =>
    set((state) => ({ shoppeScene: !state.shoppeScene })), // Toggles the shoppeScene state
  shoppeSceneOff: () => set(() => ({ shoppeScene: false })), // Turns off the shoppeScene state

  // Reset all scenes to initial state
  resetScenes: () =>
    set(() => ({
      shoppeScene: false,
      forestScene: false,
    })),

  // Set a specific scene by name (dynamic action for scalability)
  setScene: (sceneName, value) =>
    set(() => ({
      [sceneName]: value,
    })),
}));

export default useUserInputStore;
