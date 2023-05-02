import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
  // const { user } = useContext(AuthContext);
  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
