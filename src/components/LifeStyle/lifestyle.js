import React from 'react';
import './lifestyle.css';

function Lifestyle() {
  return (
    <div className="lifestyle-container">
      <h1 className="title">Freelancing Lifestyle</h1>

      <div className="section">
        <h2 className="subtitle">Productivity Tips</h2>
        <p className="paragraph">
          Maximize your productivity by using techniques like Pomodoro, time blocking, and setting clear daily goals.
        </p>
      </div>

      <div className="section">
        <h2 className="subtitle">Time Management</h2>
        <p className="paragraph">
          Use tools like Trello or Asana to manage your tasks and prioritize your work effectively.
        </p>
      </div>

      <div className="section">
        <h2 className="subtitle">Wellness Practices</h2>
        <p className="paragraph">
          Incorporate regular breaks, exercise, and mindfulness practices into your routine to maintain your physical and mental health.
        </p>
      </div>

      <div className="section">
        <h2 className="subtitle">Resources</h2>
        <p className="paragraph">
          Explore platforms like Udemy and Coursera for continuous learning, and join communities on LinkedIn or Reddit for networking.
        </p>
      </div>
    </div>
  );
}

export default Lifestyle;
