import React from "react";

export const SearchInput = ({ label, value, className, onChange, ...rest }) => {
  return (
    <>
      <p>{label}</p>
      <input
        type="input"
        value={value}
        className={`${className}`}
        onChange={onChange}
        {...rest}
      />
    </>
  );
};
