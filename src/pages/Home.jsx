import React, { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const [loading, setLoading] = useState(true);

  const getAllRecipes = async () => {
    try {
      const data = await fetch("https://dummyjson.com/recipes");
      const result = await data.json();
      setRecipes(result.recipes);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <RecipeList title="All Recipes" data={recipes} loading={loading} />
    </div>
  );
};

export default Home;
