import React, { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList";

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
  return (
    <div>
      <RecipeList
        title="Breakfast"
        data={mealTypeRecipes.breakfast}
        loading={mealTypeLoading}
      />
      <RecipeList
        title="Lunch"
        data={mealTypeRecipes.lunch}
        loading={mealTypeLoading}
      />
      <RecipeList
        title="Dinner"
        data={mealTypeRecipes.dinner}
        loading={mealTypeLoading}
      />
      <RecipeList
        title="Snack"
        data={mealTypeRecipes.snack}
        loading={mealTypeLoading}
      />
      <RecipeList
        title="Dessert"
        data={mealTypeRecipes.dessert}
        loading={mealTypeLoading}
      />
    </div>
  );
};

export default MealType;
