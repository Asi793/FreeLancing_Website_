import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Hire.css';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your API endpoint
    axios.get('http://localhost:8000/getjobpost/')
      .then(response => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  return (
    <div className="job-list">
      <h1>Available Posted Freelancing Jobs</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id} className="job-item">
            <h2>{job.Title}</h2>
            <p>{job.Description}</p>
            <p>{job.Skills}</p>
            <p>{job.Duration}</p>
            <p><strong>Category:</strong> {job.category}</p>
            <p><strong>Budget:</strong> ${job.budget}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
