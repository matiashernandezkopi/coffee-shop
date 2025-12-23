import { CoffeeCard } from "./CoffeeCard";
import { useCoffeeCatalogStore } from "../store/coffeeCatalogStore";

export const CoffeeList = () => {
  const { activeTag, coffeesByTag } = useCoffeeCatalogStore();

  const filteredCoffees = coffeesByTag(activeTag);

  return (
    <section className="mx-auto max-w-7xl px-6">
      {/* ☕ GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCoffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>

      {/* 🫥 Empty state */}
      {filteredCoffees.length === 0 && (
        <div className="mt-16 text-center text-neutral-500">
          No coffees found for this tag ☕
        </div>
      )}
    </section>
  );
};
