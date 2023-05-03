import React from 'react';

const SingleRecipe = ({ recipe }) => {
  const { recipe_id, recipe_url, recipe_name, ingredients } = recipe;
  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl rounded-lg flex items-stretch">
        <figure className="h-60"><img className='h-full w-full object-cover' src={recipe.recipe_url} alt="recipe" /></figure>
        <div className="card-body min-h-[55vh] flex-1">
          <h2 className="card-title text-2xl text-pink-800">{recipe.recipe_name}</h2>
          <span className='font-bold'>Ingredients</span>
          <p>{recipe.ingredients}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Make Favorite</button>
          </div>
        </div>
      </div>
    </div>


  );
};

export default SingleRecipe;