import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RecipeList from "../components/RecipeList";

const Search = () => {
  
  const [searchParam] = useSearchParams();
  const query = searchParam.get("query");
  
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSearch = async () => {
    try {
      const data = await fetch(
        `https://dummyjson.com/recipes/search?q=${query}`
      );
      const result = await data.json();
      console.log(result);
      setRecipes(result.recipes || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold mb-5">Search Results for "{query}"</h1>
      {recipes.length > 0 ? 
      (<RecipeList title="Recipes" data={recipes}/>) :
      (<p className="text-2xl font-bold">No Recipes found for your search!</p>)}
    </div>
  );
};

export default Search;
