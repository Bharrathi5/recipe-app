import React from "react";
import { useLocation } from "react-router-dom";
import { useFavourite } from "../context/FavContext";
import { GoDotFill } from "react-icons/go";
import { RiHeartAddLine, RiHeartFill } from "react-icons/ri";
import { HiMiniStar } from "react-icons/hi2";

const RecipeDetail = () => {
  const location = useLocation();
  const recipe = location.state?.recipe;
  const { favourite, toggleFavourite } = useFavourite();
  const isFavourite = favourite.some((fav) => fav.id === recipe.id);

  if (!recipe) {
    return (
      <div className="flex justify-center">
        <h2>No recipe found!</h2>
        <a href="/">Home</a>
      </div>
    );
  }
  return (
    <div className="flex flex-col m-20">
      <div className="flex w-full gap-10">
        <img
          className="w-96 h-96 rounded-full "
          src={recipe.image}
          alt={recipe.name}
        />
        <div className="flex flex-col bg-indigo-50 w-full gap-5 rounded-3xl p-10">
          <div>
            <h1 className="text-5xl font-bold font-mono mb-5">{recipe.name}</h1>
            <div className="flex gap-7">
              <p className="text-2xl font-semibold italic font-mono">
                {recipe.cuisine}
              </p>
              <p className="place-content-center">
                <GoDotFill />
              </p>
              <p className="text-2xl font-semibold italic font-mono">
                {recipe.mealType.join(" | ")}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-medium">
              Servings: {recipe.servings} people
            </p>
            <p className="text-xl font-medium">
              Preparation time: {recipe.prepTimeMinutes} min
            </p>
            <p className="text-xl font-medium">
              Cooking time: {recipe.cookTimeMinutes} min
            </p>
            <p className="text-xl font-medium">
              Difficulty: {recipe.difficulty}
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-xl font-medium">Favourite:</p>
            <button onClick={() => toggleFavourite(recipe)}>
              {isFavourite ? (
                <RiHeartFill className="size-7" />
              ) : (
                <RiHeartAddLine className="size-7" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-10 justify-around my-14">
        <div className="flex flex-col gap-5 w-1/3 bg-indigo-100 p-10 rounded-2xl">
          <h2 className="text-2xl font-medium ">Ingredients:</h2>
          <ul className="list-disc">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-xl mb-2 ml-10">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5 w-2/3 bg-indigo-100 p-10 rounded-2xl">
          <h2 className="text-2xl font-medium ">Instructions:</h2>
          <ul className="list-decimal">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="text-xl mb-2 ml-10">
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-around gap-10">
        <div className="flex flex-col gap-5 bg-indigo-300 p-10 rounded-2xl w-full">
          <h4 className="text-2xl font-medium my-3">
            Nutritional information:
          </h4>
          <p className="text-xl font-medium">
            Calories per Serving: {recipe.caloriesPerServing}
          </p>
        </div>
        <div className="flex flex-col w-full gap-5 bg-indigo-300 p-10 rounded-2xl">
          <h4 className="text-2xl font-medium my-3">Rating:</h4>
          <p className="text-xl font-medium">{recipe.rating} / 5</p>
          <p className="text-xl font-medium">{recipe.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
