import { useState } from 'react';

import Category from './Category';
import style from './CategoryPage.module.css';

const categories = [
  { name: 'Todos',     color: 'var(--black)' },
  { name: 'Matemáticas',     color: 'var(--purple-600)' },
  { name: 'Ciencia ficción', color: 'var(--blue-500)'   },
  { name: 'Química',         color: 'var(--green-600)'  },
  { name: 'Historia',        color: 'var(--yellow-700)' },
  { name: 'Literatura',      color: 'var(--magenta-500)' },
];

export default function CategoryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <main className={style.page}>
      <h2>Inventario</h2>

      <div className={style.categoryList}>
        {categories.map((category, index) => (
          <Category
            key={index}
            name={category.name}
            color={category.color}
            active={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </main>
  );
}
