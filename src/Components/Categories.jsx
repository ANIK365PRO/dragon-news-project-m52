import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  console.log(categories);
  return (
    <div className="">
      <h2 className="text-primary font-bold mb-5">
        All Categories[{categories.length}]
      </h2>

      <div className="grid grid-cols-1 text-start gap-2">
        {categories.map(category => (
          <NavLink
            className="btn bg-base-100 border-0 hover:bg-base-200 text-accent font-semibold"
            to={`/category/${category.id}`}
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
