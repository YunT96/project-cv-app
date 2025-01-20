import React from "react";
import "../styles/Components.css";

export default function CVDisplay({ formData }) {
  return (
    <div className="cv-display">
      <div className="cv-general-info">
        <div className="cv-name-info">
          <p>{formData.generalInfo.name}</p>
        </div>
        <div className="cv-contact-info">
          <p>{formData.generalInfo.email}</p>
          <p>{formData.generalInfo.phone}</p>
        </div>
        <div className="cv-address-info">
          <p>{formData.generalInfo.address}</p>
        </div>
      </div>
      <div className="cv-bottom-display">
        <h2>Education</h2>
        {formData.educationInfo.map((education) => (
          <div key={education.id} className="education-entry">
            <div className="date-column">
              <p>{education.startDate}</p>
              <div className="dash">-</div>
              <p>{education.endDate}</p>
            </div>
            <div className="info-column">
              <p>{education.school}</p>
              <p>{education.degree}</p>
            </div>
          </div>
        ))}

        <h2>Professional Experience</h2>
        {formData.experienceInfo.map((experience) => (
          <div key={experience.id} className="experience-entry">
            <div className="date-column">
              <p>{experience.startDate}</p>
              <div className="dash">-</div>
              <p>{experience.endDate}</p>
            </div>
            <div className="info-column">
              <p>{experience.company}</p>
              <p>{experience.position}</p>
              <p
                style={{
                  wordWrap: "break-word",
                  whiteSpace: "pre-wrap",
                  maxWidth: "100%",
                  overflowWrap: "break-word",
                  overflow: "hidden", // Prevents horizontal scrolling
                  textOverflow: "ellipsis", // Shows ... if text gets cut off
                }}
              >
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
