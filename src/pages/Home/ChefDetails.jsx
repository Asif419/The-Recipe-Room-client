import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
  const chef = useLoaderData();
  return (
    <div>
      <h2>details</h2>
    </div>
  );
};

export default ChefDetails;