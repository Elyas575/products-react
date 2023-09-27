import React from "react";

const DropDown = ({ options, value, label, onChange }) => {
  console.log(options);
  return (
    <>
      <label>{label}</label>
      <select id="sort-field" className="sort-by-default" value={value} onChange={onChange}>
        {options?.map(({ title, value }) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropDown;