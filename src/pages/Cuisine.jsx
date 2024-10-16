import React, { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList"; 

const Cuisine = () => {
  const [recipes, setRecipes] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const result = await response.json();

      const uniqueCuisines = Array.from(
        new Set(result.recipes.map((recipe) => recipe.cuisine))
      );

      setRecipes(result.recipes);
      setCuisines(uniqueCuisines);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading) return <p>Loading cuisines...</p>;

  return (
    <div className="p-5">
      {cuisines.map((cuisine) => (
        <div key={cuisine} className="mb-16">
          <RecipeList
            title={`${cuisine} Recipes`}
            data={recipes.filter((recipe) => recipe.cuisine === cuisine)}
          />
        </div>
      ))}
    </div>
  );
};

export default Cuisine;
