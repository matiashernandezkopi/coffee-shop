import { useCoffeeModalStore } from "../store/coffeeModalStore";
import { useEffect, useState } from "react";

export const CoffeeModal = () => {
  const { isOpen, coffee, closeModal } = useCoffeeModalStore();
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeModal]);

  // Reset pasos cuando cambia el café
  useEffect(() => {
    setCompletedSteps([]);
  }, [coffee]);

  if (!isOpen || !coffee) return null;

  const toggleStep = (index: number) => {
    setCompletedSteps((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const remainingIngredients = coffee.ingredients.map((ingredient) => {
    const used = coffee.instructions.reduce((total, step, index) => {
      if (!completedSteps.includes(index)) return total;

      const usage = step.uses.find(
        (u) => u.ingredient === ingredient.name
      );

      return usage ? total + usage.amount : total;
    }, 0);

    const remaining = Math.max(ingredient.amount - used, 0);

    return {
      ...ingredient,
      used,
      remaining,
      completed: remaining === 0,
    };
  }
  );

  const toggleIngredient = (ingredientName: string) => {
    if (!coffee) return;

    const stepsUsingIngredient = coffee.instructions
      .map((step, index) => ({
        index,
        usesIngredient: step.uses.some(
          (u) => u.ingredient === ingredientName
        ),
      }))
      .filter((s) => s.usesIngredient)
      .map((s) => s.index);

    const allCompleted = stepsUsingIngredient.every((index) =>
      completedSteps.includes(index)
    );

    setCompletedSteps((prev) => {
      if (allCompleted) {
        // desmarcar todos
        return prev.filter(
          (index) => !stepsUsingIngredient.includes(index)
        );
      }

      // marcar todos
      return Array.from(
        new Set([...prev, ...stepsUsingIngredient])
      );
    });
  };

  const usedTime = coffee.instructions.reduce((total, step, index) => {
    if (!completedSteps.includes(index)) return total;
    return total + step.time;
  }, 0);

  const remainingTime = Math.max(coffee.time.amount - usedTime, 0);
  const timeCompleted = remainingTime === 0;

  const toggleTime = () => {
    const allSteps = coffee.instructions.map((_, i) => i);
    const allCompleted = allSteps.every((i) =>
      completedSteps.includes(i)
    );

    setCompletedSteps(allCompleted ? [] : allSteps);
  };



  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-3xl border border-coffee/50 bg-linear-to-br from-black to-coffee-dark p-8 text-white shadow-2xl max-h-5/6 overflow-hidden flex flex-col"
      >
        <div className=" flex justify-between w-full">

          <div className=" w-full flex flex-col">
            <h2 className="text-3xl font-bold">{coffee.name}</h2>
            <p className="mt-3 text-neutral-300">{coffee.description}</p>
          </div>

          <img
            src={coffee.img}
            alt={coffee.name}
            className=" h-32 aspect-square rounded-2xl object-cover"
          />

        </div>

        <h3 className="mt-6 text-xl font-semibold">Time</h3>

        <div
          onClick={toggleTime}
          className={` cursor-pointer mt-2 flex items-center justify-between rounded-md px-4 py-2 text-sm transition
          ${timeCompleted
              ? "bg-green-500/10 text-green-400 line-through"
              : "bg-black/30 text-neutral-300"
            }
          `}
        >
          <span>Total preparation time</span>

          <span className="font-mono">
            {remainingTime}/{coffee.time.amount} {coffee.time.unit}
          </span>
        </div>


        {/* INGREDIENTES */}
        <h3 className="mt-6 text-xl font-semibold">Ingredients</h3>

        <ul className="mt-3 space-y-2 text-sm">
          {remainingIngredients.map((ing) => (
            <li
              key={ing.name}
              onClick={() => toggleIngredient(ing.name)}
              className={`flex cursor-pointer justify-between rounded-md px-3 py-2 transition
              ${ing.completed
                  ? "bg-green-500/10 text-green-400 line-through"
                  : "bg-black/30 text-neutral-300 hover:bg-coffee/20"
                }
              `}
            >
              <span>{ing.name}</span>

              <span className="font-mono">
                {ing.remaining}/{ing.amount} {ing.unit}
              </span>
            </li>
          ))}
        </ul>


        {/* PASOS */}
        <h3 className="mt-6 text-xl font-semibold">Preparation steps</h3>

        <ul className="mt-4 space-y-3 overflow-y-auto coffee-scroll">
          {coffee.instructions.map((step, index) => {
            const completed = completedSteps.includes(index);

            return (
              <li
                key={index}
                onClick={() => toggleStep(index)}
                className="
                  relative cursor-pointer rounded-lg border border-white/10
                  bg-black/40 px-4 py-3 transition
                  hover:border-coffee
                "
              >
                {/* Línea verde */}
                {completed && (
                  <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-green-500" />
                )}

                <div className="relative z-10 flex items-center gap-3">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border
                      ${completed
                        ? "border-green-500 bg-green-500 text-black"
                        : "border-white/30"
                      }
                    `}
                  >
                    {completed ? "✓" : index + 1}
                  </span>

                  <p
                    className={`text-sm ${completed
                        ? "text-green-400"
                        : "text-neutral-300"
                      }`}
                  >
                    {step.text}
                  </p>
                  <span className="text-xs text-neutral-400">
                    {step.time} min
                  </span>

                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
