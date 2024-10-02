import { create } from "zustand";

import { IProduct } from "@/shared/consts/consts";

interface State {
  activeCard: IProduct | null;
  setActiveCard: (activeCard: IProduct | null) => void;
}
export const useCardStore = create<State>()((set) => ({
  activeCard: null,
  setActiveCard: (activeCard) => set({ activeCard }),
}));
