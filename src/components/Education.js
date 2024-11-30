import React, { useState } from 'react';
import '../styles/Education.css';

const Education = ({ onSubmit }) => {
  const [info, setInfo] = useState({ school: '', study: '', date: '' });
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
    <div className="education">
      <h2>Educational Experience</h2>
      {isEditing ? (
        <div>
          <input
            name="school"
            placeholder="School Name"
            value={info.school}
            onChange={handleChange}
          />
          <input
            name="study"
            placeholder="Title of Study"
            value={info.study}
            onChange={handleChange}
          />
          <input
            name="date"
            placeholder="Date of Study"
            value={info.date}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <p><strong>School:</strong> {info.school}</p>
          <p><strong>Study:</strong> {info.study}</p>
          <p><strong>Date:</strong> {info.date}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Education;
