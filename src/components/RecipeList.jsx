import React from "react";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

const RecipeList = ({ title, data }) => {
  return (
    <div className="flex flex-col gap-16 my-10 mx-10">
      <h3 className="text-3xl font-semibold">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 justify-items-start">
        {data.map((recipe) => (
          <Link key={recipe.id} to={`/detail/${recipe.id}`} state={{ recipe }}>
            <RecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
