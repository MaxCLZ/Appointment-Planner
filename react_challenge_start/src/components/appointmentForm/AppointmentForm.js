import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
import PropTypes from "prop-types";
export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const getContactNames = () => {
    return contacts?.map((contact) => contact.name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          type="text"
          required
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ContactPicker
          name="contact"
          value={contact}
          contacts={getContactNames()}
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          placeholder="Time"
          type="time"
          name="time"
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          placeholder="Date"
          type="date"
          required
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={getTodayString()}
        />
        <button type="submit">Add Apointments</button>
      </form>
    </div>
  );
};
// Proptypes
AppointmentForm.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};
