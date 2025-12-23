import { useCoffeeModalStore } from "../store/coffeeModalStore";
import type { Coffee } from "../types";

export const CoffeeCard = ({ coffee }: {coffee: Coffee}) => {
  const openModal = useCoffeeModalStore((s) => s.openModal);

  return (
    <article
      onClick={() => openModal(coffee)}
      className="
        group relative cursor-pointer overflow-hidden
        rounded-2xl border border-coffee/40
        bg-linear-to-br from-black to-coffee-dark
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-2xl hover:shadow-coffee/40
      "
    >
      {/* Imagen */}
      <img
        src={coffee.img}
        alt={coffee.name}
        className="h-48 w-full object-cover transition group-hover:scale-105"
      />

      {/* Overlay hover */}
      <div className="
        pointer-events-none absolute inset-0
        bg-black/70 opacity-0
        transition-opacity duration-300
        group-hover:opacity-100
        flex flex-col justify-center px-6
      ">
        <h4 className="text-lg font-semibold text-coffee">
          Ingredients
        </h4>

        <ul className="mt-2 text-sm text-neutral-300">
          {coffee.ingredients.map((i) => (
            <li key={i.name}>
              • {i.name} — {i.amount}{i.unit}
            </li>
          ))}
        </ul>
      </div>

      {/* Contenido */}
      <div className="p-4 relative z-10">
        <h3 className="text-xl font-semibold">{coffee.name}</h3>

        <p className="mt-2 text-sm text-neutral-300 line-clamp-2">
          {coffee.description}
        </p>

        <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
          <span>⏱ {coffee.time.amount} {coffee.time.unit}</span>
          <span className="capitalize">{coffee.tags.join(" • ")}</span>
        </div>
      </div>
    </article>
  );
};
