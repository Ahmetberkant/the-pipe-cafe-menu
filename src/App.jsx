import { useState } from "react";
import menu from "./data/menu.json";
import CategorySlider from "./components/menu/CategorySlider";
import ProductGrid from "./components/menu/ProductGrid";
import Footer from "./components/menu/Footer";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [search, setSearch] = useState("");

  return (
    <div className="mx-auto max-w-6xl p-5">
      <div className="mb-8 flex justify-center">
        <img
          src="/images/pipe.png"
          alt="The Pipe Cafe Logo"
          className="h-80 w-auto object-contain"
        />
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Ürün ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border p-4 text-lg focus:border-amber-500 focus:outline-none"
        />
      </div>

      {search.trim() !== "" ? (
        <ProductGrid
          category={null}
          categories={menu.categories}
          products={menu.products}
          search={search}
          onBack={() => setSearch("")}
        />
      ) : selectedCategory ? (
        <ProductGrid
          category={selectedCategory}
          categories={menu.categories}
          products={menu.products}
          search=""
          onBack={() => setSelectedCategory(null)}
        />
      ) : (
        <CategorySlider
          categories={menu.categories}
          onSelect={setSelectedCategory}
        />
      )}
      <Footer />
    </div>
  );
}
