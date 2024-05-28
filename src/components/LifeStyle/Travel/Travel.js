// src/TravelCategory.js
import React, { useState } from 'react';
import './Travel.css';

const Travel = () => {
  const [categories, setCategories] = useState([
    {
      name: 'Travel Planning',
      description: 'Helping clients plan their trips including itineraries, bookings, and recommendations.',
      img: '/images/travel-planning.jpg',
    },
    {
      name: 'Tour Guide',
      description: 'Providing guided tours to clients, sharing knowledge about locations and attractions.',
      img: '/images/tour-guide.jpg',
    },
    {
      name: 'Travel Blogging',
      description: 'Writing blogs about travel experiences, tips, and guides to inspire and inform readers.',
      img: '/images/travel-blogging.jpg',
    },
    {
      name: 'Travel Photography',
      description: 'Capturing and selling stunning travel photos to clients and publications.',
      img: '/images/travel-photography.jpg',
    },
    {
      name: 'Adventure Travel',
      description: 'Organizing and guiding adventure travel experiences like hiking, rafting, and more.',
      img: '/images/adventure-travel.jpg',
    },
    {
      name: 'Cultural Tours',
      description: 'Offering tours focused on cultural experiences and historical sites.',
      img: '/images/cultural-tours.jpg',
    },
    {
      name: 'Travel Consultancy',
      description: 'Providing expert advice and consulting services to travelers and travel businesses.',
      img: '/images/travel-consultancy.jpg',
    },
  ]);

  return (
    <div className="travel-container">
      <h2>Travel Categories</h2>
      <ul className="travel-list">
        {categories.map((category, index) => (
          <li key={index} className="travel-item">
            <img src={category.img} alt={category.name} className="travel-image" />
            <div className="travel-info">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Travel;
