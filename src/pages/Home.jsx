import { useState } from "react";

import menu from "../data/menu.json";

import Header from "../components/layout/Header";
import Container from "../components/layout/Container";
import SearchBar from "../components/menu/SearchBar";
import CategorySlider from "../components/menu/CategorySlider";
import ProductGrid from "../components/menu/ProductGrid";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <main className="min-h-screen bg-stone-100">
      <Header />

      <Container>
        {selectedCategory === null ? (
          <>
            <SearchBar />

            <CategorySlider
              categories={menu.categories}
              onSelect={setSelectedCategory}
            />
          </>
        ) : (
          <ProductGrid
            category={selectedCategory}
            categories={menu.categories}
            products={menu.products}
            onBack={() => setSelectedCategory(null)}
          />
        )}
      </Container>
    </main>
  );
}
