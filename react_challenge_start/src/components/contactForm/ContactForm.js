import React from "react";
import PropTypes from "prop-types";
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          required
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Phone number"
          type="tel"
          pattern="[0-9]{10}"
          required
          name="phonenumber"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
// Proptypes
ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
