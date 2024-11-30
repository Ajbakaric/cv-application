import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

const GeneralInfo = ({ onSubmit }) => {
  const [info, setInfo] = useState({ name: '', email: '', phone: '' });
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
    <div className="general-info">
      <h2>General Information</h2>
      {isEditing ? (
        <div>
          <input
            name="name"
            placeholder="Name"
            value={info.name}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            value={info.email}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone"
            value={info.phone}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {info.name}</p>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Phone:</strong> {info.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
