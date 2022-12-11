import React from "react";

export const Button = ({ classNames, text, ...rest }) => {
  return (
    <input
      className={`${classNames}`}
      type="button"
      value={`${text}`}
      {...rest}
    />
  );
};
