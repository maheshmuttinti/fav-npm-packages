import React from "react";
import { ListItem } from "./ListItem";
const rand =
  Math.random(Math.floor() * (100000 - 1) + 1) + new Date().getTime();
console.log("rand", rand);

export const List = ({
  data,
  heading,
  listClassNames,
  itemClassNames,
  listType = "list",
}) => {
  return (
    <div className={listClassNames}>
      <h3>{heading}</h3>
      {data?.map((item, index) => (
        <React.Fragment key={`${listType}-${rand}-${index}`}>
          <ListItem className={`${itemClassNames}`} itemData={item} />
        </React.Fragment>
      ))}
    </div>
  );
};
