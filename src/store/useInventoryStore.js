import { create } from "zustand";

const useInventoryStore = create((set, get) => ({
  mushrooms: 10,

  increment: () => {
    const currentState = get();
    set({ mushrooms: currentState.mushrooms + 1 });
  },

  decrement: () => {
    const currentState = get();
    set({ mushrooms: currentState.mushrooms - 1 });
  },
}));

export default useInventoryStore;
