import { create } from "zustand";
import { coffees } from "../data/coffees";
import type { Coffee } from "../types";

interface CoffeeCatalogState {
  coffees: Coffee[];
  tags: string[];
  activeTag: string | null;

  setActiveTag: (tag: string | null) => void;
  coffeesByTag: (tag: string | null) => Coffee[];
}

export const useCoffeeCatalogStore = create<CoffeeCatalogState>((set) => {
  const coffeeList = Object.values(coffees);
  const tags = Array.from(
    new Set(coffeeList.flatMap((c) => c.tags))
  );

  return {
    coffees: coffeeList,
    tags,
    activeTag: null,

    setActiveTag: (tag) => set({ activeTag: tag }),

    coffeesByTag: (tag) => {
      if (!tag) return coffeeList;
      return coffeeList.filter((c) => c.tags.includes(tag));
    },
  };
});
