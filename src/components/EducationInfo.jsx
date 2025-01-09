import React from "react";
import "../styles/Components.css";

export default function EducationInfo({ formData, updateCV, deleteEducation }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateCV({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <form>
        <input
          name="school"
          value={formData.school || ""}
          onChange={handleChange}
          placeholder="School"
        />
        <input
          name="degree"
          value={formData.degree || ""}
          onChange={handleChange}
          placeholder="Degree"
        />
        <input
          name="startDate"
          value={formData.startDate || ""}
          onChange={handleChange}
          placeholder="Start Date"
        />
        <input
          name="endDate"
          value={formData.endDate || ""}
          onChange={handleChange}
          placeholder="End Date"
        />
        <button type="button" onClick={deleteEducation}>
          Delete
        </button>
      </form>
    </div>
  );
}
