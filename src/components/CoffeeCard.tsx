import type { Coffee } from "../store/coffeeModalStore";
import { useCoffeeModalStore } from "../store/coffeeModalStore";

interface Props {
  coffee: Coffee;
}

export const CoffeeCard = ({ coffee }: Props) => {
  const openModal = useCoffeeModalStore((s) => s.openModal);

  return (
    <article
      onClick={() => openModal(coffee)}
      className="
        group cursor-pointer
        rounded-2xl border border-coffee/40
        bg-linear-to-br from-black to-coffee-dark
        p-4 transition-all duration-300
        hover:-translate-y-2 hover:shadow-2xl hover:shadow-coffee/40
      "
    >
      <img
        src={coffee.img}
        alt={coffee.name}
        className="mb-4 h-48 w-full rounded-xl object-cover"
      />

      <h3 className="text-xl font-semibold text-white">
        {coffee.name}
      </h3>

      <p className="mt-2 text-sm text-neutral-300 line-clamp-3">
        {coffee.description}
      </p>
    </article>
  );
};
