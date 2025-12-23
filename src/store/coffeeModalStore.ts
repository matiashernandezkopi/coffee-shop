import { create } from "zustand";

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Instruction {
  text: string;
  time: number; // minutes
  uses: {
    ingredient: string;
    amount: number;
  }[];
}

export interface Coffee {
  id: string;
  name: string;
  img: string;
  description: string;
  tags: string[];
  ingredients: Ingredient[];
  instructions: Instruction[];
  time: {
    amount: number;
    unit: "min";
  };
}



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
