import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {

  const navigate = useNavigate();

  const {data, setdata} = useContext(recipecontext)
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();

    setdata([...data, recipe]);

    reset();
    navigate("/recipes")
  }

  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input
        className="block border-b outline-0 p-2"
        {...register("image")}
        type="url"
        placeholder="Enter image Url"
      />

      <small className="text-red-300">This is how the error is shown</small>

      <input
        className="block border-b outline-0 p-2"
        {...register("title")}
        type="title"
        placeholder="Recipe title"
      />
      <input
        className="block border-b outline-0 p-2"
        {...register("chef")}
        type="text"
        placeholder="Chef Name"
      />
      <textarea
        className="block border-b outline-0 p-2"
        {...register("desc")}
        placeholder="Start from here"
      ></textarea>
      <textarea
        className="block border-b outline-0 p-2"
        {...register("ingr")}
        placeholder="//write ingredients seperated by comma"
      ></textarea>
      <textarea
        className="block border-b outline-0 p-2"
        {...register("inst")}
        placeholder="//write instruction seperated by comma"
      ></textarea>

      <select className="block border-b outline-0 p-2 bg-black rounded mt-5" {...register("category")}>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dinner">Dinner</option>
      </select>

      <button className="mt-5 block bg-gray-900 px-4 py-2 rounded">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
