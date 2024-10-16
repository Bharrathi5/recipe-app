import React from "react";
const RecipeCard = ({ recipe }) => {
  return (
    <div className="flex flex-col w-52 h-64 gap-3 px-5">
      <img className="rounded-full" src={recipe.image} alt="recipe_img" />
      <h4 className="text-lg font-semibold ml-2">{recipe.name}</h4>
    </div>
  );
};

export default RecipeCard;
