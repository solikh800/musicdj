import React from 'react';
import NavLinks from './NavLinks';
import Icon from '../Assets/Svg/Icon';
import {images} from '../constants';

const SlideDrawer = ({onClick}) => {
  return (
    <div className="md:hidden h-screen p-4 z-50">
      <div className="absolute  md:hidden left-2/4 ml-5 sm:ml-10 ">
        <Icon
          name="close"
          className="text-red-600 w-8 sm:w-9"
          onClick={onClick}
        />
      </div>
      <div>
        <div className="z-50 w-4/5 mt-3 flex justify-center items-center h-14">
          <img src={images.logo} alt="logo" className="w-10 h-10 z-50 mx-4 " />
          <h2 className="text-white font-bold">MUSIC SOLI</h2>
        </div>
        <div className="pl-2">
          <NavLinks />;
        </div>
      </div>
    </div>
  );
};

export default SlideDrawer;
