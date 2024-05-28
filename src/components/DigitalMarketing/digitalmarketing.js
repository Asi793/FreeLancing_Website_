// import React from 'react';
// import './digitalmarketing.css';

// const DigitalMarketing = () => {
//   const services = [
//     { id: 1, title: 'SEO Optimization', description: 'Boost your website ranking on search engines.' },
//     { id: 2, title: 'Social Media Management', description: 'Engage with your audience on social media platforms.' },
//     { id: 3, title: 'Content Marketing', description: 'Create and distribute valuable content to attract customers.' },
//   ];

//   return (
//     <section id="digital-marketing" className="digital-marketing">
//       <div className="container">
//         <h2>Digital Marketing Services</h2>
//         <div className="services-list">
//           {services.map(service => (
//             <div key={service.id} className="services">
//               <h3>{service.title}</h3>
//               <p>{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DigitalMarketing;


// DigitalMarketing.js
import React, { useState } from 'react';
import './digitalmarketing.css';

const DigitalMarketing = () => {
  const [categories, setCategories] = useState([
    'SEO',
    'Content Marketing',
    'Social Media Marketing',
    'Email Marketing',
    'Video Marketing',
    'Music Promotion',
  ]);

  return (
    <div className="digital-marketing-container">
      <h2>Digital Marketing Categories</h2>
      <ul className="digital-marketing-list">
        {categories.map((category, index) => (
          <li key={index} className="digital-marketing-item">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DigitalMarketing;

