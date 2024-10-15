import React from 'react'
import { useLocation } from 'react-router-dom';

const RecipeDetail = () => {
  const location = useLocation();
  const recipe = location.state?.recipe;
  console.log(recipe);

  if(!recipe) {
    return (
      <div className='flex justify-center'>
        <h3>No recipe found!</h3>
        <a href='/'>Home</a>
      </div>
    )
  }
  return (
    <div>
      <div>
        <img />
        <div>
          <div>
            <h4>Name</h4>
            <p>cuisine * mealtype</p>
          </div>
          <div>
            <p>Servings:</p>
            <p>Preparation time:</p>
            <p>Cooking time:</p>
            <p>Difficulty:</p>
          </div>
        </div>
      </div>
      <div>
        <div>Ingredients:</div>
        <div>Instructions:</div>
      </div>
      <div><p>Nutritional information:</p></div>
      <div>
        <p>Ratings:</p>
        <p>Review count</p>
      </div>
    </div>
  );
}

export default RecipeDetail