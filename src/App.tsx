import { CoffeeList } from "./components/CoffeeList";
import { CoffeeModal } from "./components/CoffeeModal";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Coffee cards grid */}
      <CoffeeList />

      {/* Global modal */}
      <CoffeeModal />
    </main>
  );
}
