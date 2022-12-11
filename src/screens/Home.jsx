import React from "react";
import { useGetNPMPackages } from "../hooks/useGetNPMPackages";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  

  const onClick = () => {
    navigate("/add-fav-npm-packages");
  };

  return (
    <div>
      <h1>Welcome to Favorite NPM Packages</h1>
      <div>
        <Button text="Add Fav" onClick={onClick} />
      </div>
    </div>
  );
}
