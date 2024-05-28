// src/DataCategory.js
import React, { useState } from 'react';
import './data.css';

const Data = () => {
  const [categories, setCategories] = useState([
    'Data Entry',
    'Data Analysis',
    'Data Collection',
    'Web Scraping',
    'Excel',
    'Dashboards',
    
  ]);

  return (
    <div className="category_container">
      <h2>Data Categories</h2>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
