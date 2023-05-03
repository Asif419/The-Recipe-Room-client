import React from 'react';
import SingleRecipe from './SingleRecipe';

const ChefRecipes = ({ chef }) => {
  const { recipes, chef_name } = chef;
  return (
    <div className='my-16 md:my-20'>
      <div className='text-center mb-10'>
        <h2 className='text-1xl md:text-3xl'>
          <span className='underline decoration-base-200 text-4xl md:text-5xl pl-1 md:pl-2 font-bold'>Most Liked Recipes</span>
          <span className='text-4xl md:text-5xl text-red-800'> list</span>
        </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center items-center'>
        {
          recipes.map(recipe =>
            <SingleRecipe
              key={recipe.recipe_id}
              recipe={recipe}
            >
            </SingleRecipe>
          )
        }
      </div>
    </div>
  );
};

export default ChefRecipes;