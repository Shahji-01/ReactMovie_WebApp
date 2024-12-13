import React from "react";

export const Dropdown = ({ title, option ,func}) => {
  return (
    <div className="select">
      <select defaultValue="0" onChange={func} name="format" id="format">
        <option value="0" disabled>
          {title}
        </option>
        {option.map((item, index) => (
          <option value={item} key={index}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
