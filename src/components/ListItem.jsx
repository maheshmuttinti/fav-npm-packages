import React from "react";

export const ListItem = ({ itemData, className }) => {
  return (
    <>
      <p className={`${className}`}>{itemData?.package?.name}</p>
    </>
  );
};
