export default function ProductGrid({
  category,
  categories,
  products,
  search,
  onBack,
}) {
  const categoryInfo = categories.find((c) => c.id === category);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = category === null || product.category === category;

    const searchMatch =
      search.trim() === "" ||
      product.name.toLowerCase().includes(search.trim().toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="py-6">
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 rounded-xl bg-orange-900 px-4 py-3 text-white transition hover:bg-amber-700"
      >
        ← Geri
      </button>

      {category && (
        <h2 className="mb-6 text-3xl font-bold">{categoryInfo?.name}</h2>
      )}

      <div className="space-y-5">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-3xl bg-white shadow-md"
          >
            {/* Resim */}
            <div className="flex h-60 w-full items-center justify-center bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-full w-full object-contain p-3"
                onError={(e) => {
                  e.currentTarget.src = "/images/no-image.jpg";
                }}
              />
            </div>

            {/* Bilgiler */}
            <div className="p-5">
              <h3 className="text-xl font-bold">{product.name}</h3>

              <p className="mt-2 text-gray-500">{product.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-600">
                  ₺{product.price}
                </span>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  🔥 {product.calories} kcal
                </span>
              </div>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <div className="rounded-2xl bg-white p-8 text-center text-gray-500">
            Aramanıza uygun ürün bulunamadı.
          </div>
        )}
      </div>
      <br />
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 rounded-xl bg-orange-900 px-4 py-3 text-white transition hover:bg-amber-700"
      >
        ← Geri
      </button>
    </div>
  );
}
