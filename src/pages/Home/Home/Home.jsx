import React from 'react';
import Banner from './Banner';
import Chefs from './Chefs';
import { useNavigation } from 'react-router-dom';
import Loading from '../../../layout/Loading';

const Home = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <Chefs></Chefs>
    </div>
  );
};

export default Home;