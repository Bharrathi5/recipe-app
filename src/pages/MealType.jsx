import React, { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList";
import Shimmer from "../components/Shimmer";

const MealType = () => {
  const [mealTypeRecipes, setMealTypeRecipes] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
    dessert: [],
  });

  useEffect(() => {
    getMealTypeRecipes("breakfast");
    getMealTypeRecipes("lunch");
    getMealTypeRecipes("dinner");
    getMealTypeRecipes("snack");
    getMealTypeRecipes("dessert");
  }, []);

  const [mealTypeLoading, setMealTypeLoading] = useState(true);
  const getMealTypeRecipes = async (mealType) => {
    try {
      const data = await fetch(
        `https://dummyjson.com/recipes/meal-type/${mealType}`
      );
      const result = await data.json();
      setMealTypeRecipes((prev) => ({
        ...prev,
        [mealType]: result.recipes || [],
      }));
      setMealTypeLoading(false);
    } catch (error) {
      console.log(error);
      setMealTypeLoading(false);
    }
  };


  if (mealTypeLoading) return <Shimmer/>;

  return (
    <div>
      <RecipeList
        title="Breakfast"
        data={mealTypeRecipes.breakfast}
      />
      <RecipeList
        title="Lunch"
        data={mealTypeRecipes.lunch}
      />
      <RecipeList
        title="Dinner"
        data={mealTypeRecipes.dinner}
      />
      <RecipeList
        title="Snack"
        data={mealTypeRecipes.snack}
      />
      <RecipeList
        title="Dessert"
        data={mealTypeRecipes.dessert}
      />
    </div>
  );
};

export default MealType;
