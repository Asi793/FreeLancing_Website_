import React from 'react';
import './digitalmarketing.css';

const DigitalMarketing = () => {
  const services = [
    { id: 1, title: 'SEO Optimization', description: 'Boost your website ranking on search engines.' },
    { id: 2, title: 'Social Media Management', description: 'Engage with your audience on social media platforms.' },
    { id: 3, title: 'Content Marketing', description: 'Create and distribute valuable content to attract customers.' },
  ];

  return (
    <section id="digital-marketing" className="digital-marketing">
      <div className="container">
        <h2>Digital Marketing Services</h2>
        <div className="services-list">
          {services.map(service => (
            <div key={service.id} className="service">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
