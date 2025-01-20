import React from "react";
import "../styles/Components.css";

export default function ExperienceInfo({
  formData,
  updateCV,
  deleteExperience,
}) {
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
          name="company"
          value={formData.company || ""}
          onChange={handleChange}
          placeholder="Company"
        />
        <input
          name="position"
          value={formData.position || ""}
          onChange={handleChange}
          placeholder="Position"
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
        <textarea
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          placeholder="Description"
          style={{
            resize: "vertical",
            overflow: "auto",
            width: "100%",
          }}
        ></textarea>

        <button
          className="delete-button"
          type="button"
          onClick={deleteExperience}
        >
          Delete
        </button>
        <span className="seperator"></span>
      </form>
    </div>
  );
}
