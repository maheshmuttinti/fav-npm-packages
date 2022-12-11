import React from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/add-fav-npm-packages");
  };

  return (
    <div className="mt-20 py-7 container mx-auto">
      <h1 className="text-2xl">Welcome to Favorite NPM Packages</h1>
      <div className="mt-24">
        <div className="flex flex-col items-center justify-center border-2 border-slate-400 h-72 p-2">
          <h2 className="text-center">
            You don't have any favs yet. Please add.
          </h2>

          <Button
            title="Add Fav"
            onClick={onClick}
            className="bg-indigo-500 px-5 py-2 rounded text-white w-min mt-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
