import React from 'react';
import {colors, images} from '../constants';

function Baner({title, subTitle}) {
  return (
    <>
      <div
        style={{
          backgroundColor: colors.background,
          zIndex: -1,
        }}
        className="absolute w-screen justify-center text-center pt-32 pl-32 sm:pl-48 sm:pt-48 ">
        <h5 className="text-base text-gray-50 sm:text-xl   ">{title}</h5>
        <h2 className="text-2xl text-gray-50 sm:text-4xl ">{subTitle}</h2>
      </div>
      <img
        style={{zIndex: -2}}
        className="opacity-30 w-screen"
        src={images.background}
        alt="background"
      />
    </>
  );
}

export default Baner;
