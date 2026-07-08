export default function CategorySlider({ categories, onSelect }) {
  return (
    <div className="grid gap-4 py-6">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className="rounded-2xl bg-white p-5 text-left shadow hover:bg-amber-600 hover:text-white transition"
        >
          <h3 className="text-lg font-semibold">{category.name}</h3>
        </button>
      ))}
    </div>
  );
}
