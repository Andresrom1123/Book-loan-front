function Category() {
  const categories = [
    "Matemáticas",
    "Ciencia ficción",
    "Química",
    "Historia",
    "Literatura"
  ];

  return (
    <div>
      <h2>Categorías de libros</h2>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {categories.map((category, index) => (
          <span key={index}>
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Category;