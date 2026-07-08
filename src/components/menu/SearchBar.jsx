import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div className="relative mt-6">
      <FiSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />

      <input
        type="text"
        placeholder="Ürün ara..."
        className="w-full rounded-2xl bg-white border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-amber-500"
      />
    </div>
  );
}
