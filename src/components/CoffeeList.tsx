import { coffees } from "../data/coffees";
import { CoffeeCard } from "./CoffeeCard";

export const CoffeeList = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-10 text-center text-4xl font-bold text-white">
        Coffee Collection
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Object.values(coffees).map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </section>
  );
};
