import React, { useState } from 'react';
import '../styles/Experience.css';

const Experience = ({ onSubmit }) => {
  const [info, setInfo] = useState({ company: '', position: '', responsibilities: '', dates: '' });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setIsEditing(false);
    onSubmit(info);
  };

  const handleEdit = () => setIsEditing(true);

  return (
    <div className="experience">
      <h2>Practical Experience</h2>
      {isEditing ? (
        <div>
          <input
            name="company"
            placeholder="Company Name"
            value={info.company}
            onChange={handleChange}
          />
          <input
            name="position"
            placeholder="Position Title"
            value={info.position}
            onChange={handleChange}
          />
          <textarea
            name="responsibilities"
            placeholder="Main Responsibilities"
            value={info.responsibilities}
            onChange={handleChange}
          />
          <input
            name="dates"
            placeholder="Date Range"
            value={info.dates}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <p><strong>Company:</strong> {info.company}</p>
          <p><strong>Position:</strong> {info.position}</p>
          <p><strong>Responsibilities:</strong> {info.responsibilities}</p>
          <p><strong>Dates:</strong> {info.dates}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Experience;
