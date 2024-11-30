import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';
import CVPreview from './CVPreview';

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const handleSubmit = (data, type) => {
    if (type === 'general') setGeneralInfo(data);
    if (type === 'education') setEducation(data);
    if (type === 'experience') setExperience(data);
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: 'center', color: '#2c3e50', margin: '20px 0' }}>CV Application</h1>
      {/* General Info Section */}
      <div className="section">
        <GeneralInfo onSubmit={(data) => handleSubmit(data, 'general')} />
      </div>
      {/* Education Section */}
      <div className="section">
        <Education onSubmit={(data) => handleSubmit(data, 'education')} />
      </div>
      {/* Experience Section */}
      <div className="section">
        <Experience onSubmit={(data) => handleSubmit(data, 'experience')} />
      </div>
      {/* CV Preview Section */}
      <div className="section" style={{ background: '#ecf0f1' }}>
        <CVPreview
          generalInfo={generalInfo}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  );
};

export default App;
