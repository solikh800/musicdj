import React from 'react';
import {NavLink} from 'react-router-dom';
import AppBtn from '../Components/appBtn';
import {colors, images} from '../constants';
import Baner from './../Components/Baner';

const NotFound = () => {
  return (
    <>
      <Baner title="PAGE NOT FOUND" subTitle="404" />
      <div
        style={{backgroundColor: colors.background}}
        className="flex flex-col justify-center items-center mx-auto z-10 mt-72 lg:pt-24 ">
        <div className="flex flex-col w-4/5 sm:w-3/4 md:w-1/2 mt-10 justify-center items-center ">
          <div className="w-full h-64 sm:h-72 xl:h-80 flex justify-center items-center bg-white rounded-xl">
            <img src={images.notfound} alt="notfound" />
            <h5 className="text-red-600 text-7xl font-bold ">404</h5>
          </div>
          <div className="w-96 flex flex-col items-center mt-5 mb-10">
            <h5 className="text-white md:text-lg xl:text-xl font-bold mb-4 ">
              SORRY, THE PAGE WAS NOT FOUND
            </h5>
            <p className="text-gray-400 text-sm">
              You could have mistyped the URL, or the page has moved.
            </p>
          </div>
          <div className="flex">
            <NavLink to="/">
              <AppBtn className="mx-4 bg-red-500 hover:bg-red-800">
                Back Home
              </AppBtn>
            </NavLink>
            <NavLink to="/contact">
              <AppBtn>CONTACT US</AppBtn>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
