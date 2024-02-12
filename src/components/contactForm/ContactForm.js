import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <h1 style={{ color: "#182519", font: "Roboto" }}>Name</h1>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Contact Name"
            color="#fff"
          />
        </label>
        <br />
        <label>
          <h1 style={{ color: "#182519", font: "Roboto" }}>Phone</h1>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
            placeholder="Contact Phone (###-###-####)"
          />
        </label>
        <br />
        <label>
          <h1 style={{ color: "#182519", font: "Roboto" }}>Email</h1>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Contact Email"
          />
        </label>
        <br />
        <button type="submit" value="Add Contact">
          Add Contact
        </button>
      </form>
    </>
  );
};
