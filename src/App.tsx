import { useEffect } from "react";
import { useCoffeeModalStore } from "./store/coffeeModalStore";
import { CoffeeDustCursor } from "./components/CoffeeDustCursor";
import { CoffeeList } from "./components/CoffeeList";
import { CoffeeModal } from "./components/CoffeeModal";
import { CoffeeTags } from "./components/CoffeeTags";
import { CoffeeTestimonials } from "./components/CoffeeTestimonials";
import { CoffeeSocials } from "./components/CoffeeSocials";

export default function App() {
  const { isOpen, closeModal } = useCoffeeModalStore();

  // 🔑 Atajos globales
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeModal();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, closeModal]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col gap-10">
      <CoffeeDustCursor />
      {/* 🌌 Fondo atmosférico */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(120,53,15,0.15),transparent_50%)]" />

      {/* ☕ HEADER */}
      <header className="relative z-10 mx-auto max-w-7xl px-6 mt-5 justify-start flex flex-col w-full gap-1.5">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Brew<span className="text-coffee">Master</span>
        </h1>

        <p className="max-w-xl text-sm text-neutral-400">
          Craft coffee step by step. Track time, ingredients and perfection.
        </p>
      </header>

      {/* ☕ MAIN CONTENT */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 mb-15">
        {/* 🏷️ Tags */}
        <CoffeeTags />

        {/* ☕ Coffee grid */}
        <CoffeeList />
      </section>

      {/* 👑 FAMOUS COFFEE LOVERS */}
      <CoffeeTestimonials />

      {/* ☕ GLOBAL MODAL */}
      <CoffeeModal />


      {/* 🖤 FOOTER */}
      <footer >
        {/* 🌐 SOCIAL / CONTACT */}
        <CoffeeSocials />

        <div className="relative z-10 pb-6 text-center text-xs text-neutral-500">
          Brewed with ☕, React & Obsession for Details
        </div>
      </footer>
    </main>
  );
}
