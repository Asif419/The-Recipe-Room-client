import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Lottie from "lottie-react";
import cooking from './../../assets/animation/cooking.json'

const ChefDetails = () => {
  const chef = useLoaderData();
  const { chef_name, chef_picture, years_of_experience, num_of_recipes, likes } = chef;
  console.log(chef);
  return (
    <div className='px-5 md:px-36'>
      <div className='p-5 md:p-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center items-center'>
          <div>
            <Lottie
              className='h-[40vh] w-[40vh]'
              animationData={cooking}
              loop={true}
            />
          </div>
          <div>
            <div className="card w-80 md:w-96 bg-base-100 shadow-xl image-full">
              <figure><img src={chef_picture} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title text-white">{chef_name}</h2>
                <div className='flex flex-col'>
                  <p className='text-white'><span>{years_of_experience}</span> years of experience</p>
                  <p className='text-white'><span>{num_of_recipes}</span> Known recipes</p>
                  <p className='text-white'><span>{likes}</span> likes</p>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Check Chefs list</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;