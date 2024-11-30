import React from 'react';
import '../styles/CVPreview.css';

const CVPreview = ({ generalInfo, education, experience }) => {
  return (
    <div className="cv-preview">
      <h2>CV Preview</h2>
      <div>
        <h3>General Information</h3>
        <p><strong>Name:</strong> {generalInfo.name}</p>
        <p><strong>Email:</strong> {generalInfo.email}</p>
        <p><strong>Phone:</strong> {generalInfo.phone}</p>
      </div>
      <div>
        <h3>Educational Experience</h3>
        <p><strong>School:</strong> {education.school}</p>
        <p><strong>Study:</strong> {education.study}</p>
        <p><strong>Date:</strong> {education.date}</p>
      </div>
      <div>
        <h3>Practical Experience</h3>
        <p><strong>Company:</strong> {experience.company}</p>
        <p><strong>Position:</strong> {experience.position}</p>
        <p><strong>Responsibilities:</strong> {experience.responsibilities}</p>
        <p><strong>Dates:</strong> {experience.dates}</p>
      </div>
    </div>
  );
};

export default CVPreview;
