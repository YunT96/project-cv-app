import React from "react";
import CVDisplay from "./components/CVDisplay";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import "../src/styles/App.css";

function App() {
  const [formData, setFormData] = React.useState({
    generalInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    educationInfo: [
      {
        id: 1,
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ],
    experienceInfo: [
      {
        id: 1,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
  });

  const [educationIdCounter, setEducationIdCounter] = React.useState(2);
  const [experienceIdCounter, setExperienceIdCounter] = React.useState(2);

  const updateCV = (section, updatedInfo) => {
    setFormData((prev) => ({
      ...prev,
      [section]: updatedInfo,
    }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      educationInfo: [
        ...prev.educationInfo,
        {
          id: educationIdCounter,
          school: "",
          degree: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
    setEducationIdCounter((prev) => prev + 1);
  };

  const deleteEducation = (id) => {
    setFormData((prev) => ({
      ...prev,
      educationInfo: prev.educationInfo.filter((item) => item.id !== id),
    }));
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experienceInfo: [
        ...prev.experienceInfo,
        {
          id: experienceIdCounter,
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
    setExperienceIdCounter((prev) => prev + 1);
  };

  const deleteExperience = (id) => {
    setFormData((prev) => ({
      ...prev,
      experienceInfo: prev.experienceInfo.filter((item) => item.id !== id),
    }));
  };

  return (
    <div className="app-container">
      <h1>CV Builder</h1>
      <div className="cv-container">
        <div className="form-section">
          <GeneralInfo
            formData={formData.generalInfo}
            updateCV={(updatedInfo) => updateCV("generalInfo", updatedInfo)}
          />
          <h2>Education Information</h2>
          {formData.educationInfo.map((education) => (
            <EducationInfo
              key={education.id}
              formData={education}
              updateCV={(updatedInfo) => {
                const newEducationInfo = formData.educationInfo.map((item) =>
                  item.id === education.id ? updatedInfo : item
                );
                updateCV("educationInfo", newEducationInfo);
              }}
              deleteEducation={() => deleteEducation(education.id)}
            />
          ))}
          <button onClick={addEducation}>Add Education</button>
          <h2>Experience Information</h2>
          {formData.experienceInfo.map((experience) => (
            <ExperienceInfo
              key={experience.id}
              formData={experience}
              updateCV={(updatedInfo) => {
                const newExperienceInfo = formData.experienceInfo.map((item) =>
                  item.id === experience.id ? updatedInfo : item
                );
                updateCV("experienceInfo", newExperienceInfo);
              }}
              deleteExperience={() => deleteExperience(experience.id)}
            />
          ))}
          <button onClick={addExperience}>Add Experience</button>
        </div>
        <div className="preview-section">
          <CVDisplay formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default App;
