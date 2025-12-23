import { create } from "zustand";
import type { Coffee } from "../types";

interface CoffeeModalState {
  isOpen: boolean;
  coffee: Coffee | null;
  openModal: (coffee: Coffee) => void;
  closeModal: () => void;
}

export const useCoffeeModalStore = create<CoffeeModalState>((set) => ({
  isOpen: false,
  coffee: null,
  openModal: (coffee) => set({ isOpen: true, coffee }),
  closeModal: () => set({ isOpen: false, coffee: null }),
}));
