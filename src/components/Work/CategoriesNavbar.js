import React, { useState } from 'react';

const categories = [
  'Life Style',
  'Grafic and Design',
  'Digital Marketing',
  'Data',
];

const CategoriesNavbar = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="categories-navbar">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <label>
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesNavbar;
