import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select key="-1" name="contacts" onChange={onChange}>
      <option key="default" value="-1">
        Chose a contact
      </option>
      {contacts?.map((contact, index) => (
        <option key={index} value={contact}>
          {contact}
        </option>
      ))}
    </select>
  );
};
