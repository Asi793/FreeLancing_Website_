//CompletedJobList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Work.css';

const CompletedJobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint that fetches completed jobs
    axios.get('https://api.example.com/completed-jobs')
      .then(response => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching completed jobs:', error);
        setError('Failed to load completed jobs.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading completed jobs...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="completed-job-list">
      <h1>Completed Freelancing Jobs</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id} className="completed-job-item">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p><strong>Category:</strong> {job.category}</p>
            <p><strong>Budget:</strong> ${job.budget}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedJobList;
