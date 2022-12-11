import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./screens/NotFound";
import Home from "./screens/Home";
import AddFavouriteNPMPackages from "./screens/AddFavouritePackages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/add-fav-npm-packages"
        element={<AddFavouriteNPMPackages />}
      />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}

export default App;
