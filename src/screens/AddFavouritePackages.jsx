import React, { useState, useCallback } from "react";
import { SearchInput } from "../components/SearchInput";
import { useGetNPMPackages } from "../hooks/useGetNPMPackages";
import { List } from "../components/List";

export default function AddFavouritePackages() {
  const [packageName, setPackageName] = useState("");
  const onChange = (event) => {
    const value = event.target.value;
    console.log("value", value);
    setPackageName(value);
  };
  const { isLoading, data, error } = useGetNPMPackages(packageName);
  console.log("isLoading", isLoading);
  console.log("data", data);
  console.log("error", error);
  return (
    <div>
      <SearchInput
        value={packageName}
        onChange={onChange}
        label="Search For NPM Packages"
        placeholder="react"
        className={"border-2 border-black"}
      />
      {isLoading ? <p>{`Loading...`}</p> : null}
      {error ? <p>{`Oops, Something went wrong! ${error}`}</p> : null}
      {data?.results?.length === 0 ? <p>No Packages Available</p>: null}
      <List data={data?.results} />
    </div>
  );
}
