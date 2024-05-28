// graphicdesign.js
import React, { useState } from 'react';
import './graphicdesign.css';

const GraphicDesign = () => {
  const [categories, setCategories] = useState([
    'Logo Design',
    'Brand Identity',
    'Art & Illustration',
    'Print Design',
    'Web & App Design',
    'Packaging Design',
  ]);

  return (
    <div className="graphic-design-container">
      <h2>Graphic Design Categories</h2>
      <ul className="graphic-design-list">
        {categories.map((category, index) => (
          <li key={index} className="graphic-design-item">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GraphicDesign;
