import { testimonials } from "../data/testimonials";
import { coffees } from "../data/coffees";
import { useCoffeeModalStore } from "../store/coffeeModalStore";

export const CoffeeTestimonials = () => {
  const openModal = useCoffeeModalStore((s) => s.openModal);

  return (
    <section className="mx-auto max-w-7xl px-6">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Loved by Coffee Icons
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {testimonials.map((t) => {
          const coffee = coffees[t.favorite];

          return (
            <div
              key={t.name}
              className="
                rounded-3xl border border-white/10
                bg-black/40 p-8 backdrop-blur
              "
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-sm text-neutral-400">
                    “{t.quote}”
                  </p>
                </div>
              </div>

              <button
                onClick={() => openModal(coffee)}
                className="mt-6 rounded-full bg-coffee px-5 py-2 text-sm font-semibold text-black hover:scale-105 transition cursor-pointer hover:text-white "
              >
                Try {coffee.name}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
