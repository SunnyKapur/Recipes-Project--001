import { Route, Routes } from "react-router-dom";
import Recipes from "../pages/Recipes";
import Create from "../pages/Create";
import About from "../pages/About";
import Home from "../pages/Home";
import SingleRecipe from "../pages/SingleRecipe";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/details/:id" element={<SingleRecipe />} />
        <Route path="/create-recipe" element={<Create />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
