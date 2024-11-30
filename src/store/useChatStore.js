import { create } from "zustand";

const useChatStore = create((set) => ({
  messages: [
    {
      role: "system",
      content: `You are Badger, a forest animal who runs a magical traveling store...`,
    },
  ],
  addMessage: (role, content) =>
    set((state) => ({
      messages: [...state.messages, { role, content }],
    })),
}));

export default useChatStore