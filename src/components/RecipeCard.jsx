import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="duration-150 hover:scale-102 mr-3 mb-3 block w-[23vw] rounded overflow-hidden"
    >
      <img className="object-cover w-full h-[20vh] " src={image} alt="" />
      <h1 className="px-2 mt-2 font-black">{title}</h1>
      <small className="px-2 text-indigo-100 text-sm">{chef}</small>
      <p className="px-2 pb-3">
        {desc?.slice(0,100)}...
        <small className="px-2 pb-3 text-cyan-300 font-medium cursor-pointer hover:text-cyan-300 transition">
          more
        </small>
      </p>
    </Link>
  );
};

export default RecipeCard;
