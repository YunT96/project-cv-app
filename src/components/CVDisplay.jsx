import React from "react";
import "../styles/Components.css";

export default function CVDisplay({ formData }) {
  return (
    <div className="cv-display">
      <h2>General Information</h2>
      <div>
        <p>Name: {formData.generalInfo.name}</p>
        <p>Email: {formData.generalInfo.email}</p>
        <p>Phone: {formData.generalInfo.phone}</p>
        <p>Address: {formData.generalInfo.address}</p>
      </div>

      <h2>Education Information</h2>
      {formData.educationInfo.map((education) => (
        <div key={education.id}>
          <p>School: {education.school}</p>
          <p>Degree: {education.degree}</p>
          <p>Start Date: {education.startDate}</p>
          <p>End Date: {education.endDate}</p>
        </div>
      ))}

      <h2>Experience Information</h2>
      {formData.experienceInfo.map((experience) => (
        <div key={experience.id}>
          <p>Company: {experience.company}</p>
          <p>Position: {experience.position}</p>
          <p>Start Date: {experience.startDate}</p>
          <p>End Date: {experience.endDate}</p>
          <p>Description: {experience.description}</p>
        </div>
      ))}
    </div>
  );
}
