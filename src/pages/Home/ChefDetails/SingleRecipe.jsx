import React from 'react';

const SingleRecipe = ({ recipe }) => {
  const { recipe_id, recipe_url, recipe_name, ingredients } = recipe;
  return (
    <div className="card bg-base-100 shadow-xl rounded-lg">
      <figure className="h-60"><img className='h-full w-full object-cover' src={recipe_url} alt="recipe" /></figure>
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <p>{ingredients}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Make Favorite</button>
        </div>
      </div>
    </div>

  );
};

export default SingleRecipe;