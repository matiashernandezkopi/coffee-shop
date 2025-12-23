import { useCoffeeCatalogStore } from "../store/coffeeCatalogStore";

export const CoffeeTags = () => {
  const { tags, activeTag, setActiveTag } =
    useCoffeeCatalogStore();

  return (
    <div className="mb-5 flex flex-wrap gap-3 justify-center">
      <button
        onClick={() => setActiveTag(null)}
        className={`rounded-full px-4 py-2 text-sm transition 
          ${!activeTag
            ? "bg-coffee text-black "
            : "bg-black/40 text-neutral-300 hover:bg-black/60 cursor-pointer hover:scale-105 transition"
          }`}
      >
        All
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setActiveTag(tag)}
          className={`rounded-full px-4 py-2 text-sm capitalize transition
            ${activeTag === tag
              ? "bg-coffee text-black"
              : "bg-black/40 text-neutral-300 hover:bg-black/60 cursor-pointer hover:scale-105 transition"
            }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};
