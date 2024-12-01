import { create } from "zustand";

const useForestStore = create((set, get) => ({
  sleepyGhost: false,

  toggleSleepy: () => {
    const currentState = get();
    set({ sleepyGhost: !currentState.sleepyGhost });
  },
}));

export default useForestStore;
