import React from 'react';
import colors from '../config/colors';

function Baner({title, subTitle}) {
  const backgroundImage =
    'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-content-bg01.jpg';
  return (
    <>
      <div
        style={{
          backgroundColor: colors.background,
        }}
        className="absolute w-screen justify-center text-center pt-32 pl-32 sm:pl-48 sm:pt-48 ">
        <h5 className="text-base text-gray-50 sm:text-xl   ">{title}</h5>
        <h2 className="text-2xl text-gray-50 sm:text-4xl ">{subTitle}</h2>
      </div>
      <img
        className="opacity-40 w-screen"
        src={backgroundImage}
        alt="background"
      />
    </>
  );
}

export default Baner;
