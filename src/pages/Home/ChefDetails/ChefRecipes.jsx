import React from 'react';

const ChefRecipes = ({chef}) => {
  const {recipes} = chef;
  console.log(recipes);
  return (
    <div className='my-5 md:my-12'>
      <div className='text-center'>
        <h2 className='text-1xl md:text-3xl'>
          <span className='underline decoration-base-200 text-4xl md:text-5xl pl-1 md:pl-2 font-bold'>Recipies</span>
          <span className='text-4xl md:text-5xl text-red-800'> list</span>
        </h2>
      </div>
      {

      }
    </div>
  );
};

export default ChefRecipes;