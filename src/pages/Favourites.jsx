import React from 'react'
import { useFavourite } from '../context/FavContext'
import RecipeList from '../components/RecipeList';

const Favourites = () => {
  const {favourite,toggleFavourite} = useFavourite();

  if (favourite.length===0) return <p className='text-2xl font-bold m-10'>No Favourite recipes yet!</p>
  
  return (
    <div>
      <RecipeList
        title="Favourite Recipes"
        data={favourite}
      />
    </div>
  );
}

export default Favourites