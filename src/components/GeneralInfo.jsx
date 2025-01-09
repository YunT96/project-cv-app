import "../styles/Components.css";

export default function GeneralInfo({ formData, updateCV }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update only the specific field in generalInfo
    updateCV({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>General Information</h2>
      <form>
        <input
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
          placeholder="Phone"
        />
        <input
          name="address"
          value={formData.address || ""}
          onChange={handleChange}
          placeholder="Address"
        />
      </form>
    </div>
  );
}
