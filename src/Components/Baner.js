import React from 'react';
import {NavLink} from 'react-router-dom';
import {images} from '../constants';
import AppBtn from './appBtn';

function Baner({title, subTitle, onClick, date}) {
  return (
    <div className="">
      <div className="relative top-0 w-full  ">
        <div className=" absolute text-center w-full pt-28 sm:pt-28 md:pt-32 xl:pt-40 z-10">
          {date && (
            <h5 className="text-xs text-gray-50 sm:text-xl z-10  ">{date}</h5>
          )}
          <h5 className="text-lg text-gray-50 sm:text-xl z-10  ">{title}</h5>
          <h2 className="text-2xl text-gray-50 font-bold sm:text-4xl z-10 ">
            {subTitle}
          </h2>

          {onClick && (
            <NavLink to="/events">
              <div className="">
                <AppBtn
                  className="bg-red-500 hover:bg-red-800"
                  onClick={onClick}>
                  BUY TICKETS
                </AppBtn>
              </div>
            </NavLink>
          )}
        </div>
        <div></div>
        <img
          className="object-cover h-72 lg:h-96 w-full absolute top-0 "
          src={images.background}
          alt="background"
        />
      </div>
    </div>
  );
}

export default Baner;
