import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select required name="contacts" onChange={onChange}>
      <option key="default" value="">
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
