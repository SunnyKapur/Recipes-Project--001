import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Create from "../pages/Create";
import Recipes from "../pages/Recipes";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/about" element={<About />} />
      <Route path="/create-recipe" element={<Create />} />
    </Routes>
  );
};

export default Mainroutes;
