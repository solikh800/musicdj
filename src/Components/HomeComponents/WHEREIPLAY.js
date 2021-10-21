import React from 'react';
import {images} from '../../constants';

const data = [
  {
    id: 1,
    image: images.weddings,
    title: 'WEDDINGS',
  },
  {
    id: 2,
    image: images.clubesAndBars,
    title: 'CLUBS AND BARS',
  },
  {
    id: 3,
    image: images.corporateEvents,
    title: 'CORPORATE EVENTS',
  },
  {
    id: 4,
    image: images.playlistCreation,
    title: 'PLAYLIST CREATION',
  },
  {
    id: 5,
    image: images.djLessions,
    title: 'DJ LESSONS​​​​​​​',
  },
];

const WHEREIPLAY = () => {
  return (
    <div className="flex w-full flex-col xl:flex-row  my-20 px-6">
      <div className="xl:mx-6">
        <h1 className="text-white text-3xl mt-8">------ WHERE</h1>
        <h1 className=" text-3xl pl-24 mb-8 text-red-500">I PLAY</h1>
      </div>
      <div className="lg:flex grid grid-cols-2 md:grid-cols-3 md:space-x-4 space-x-3 lg:flex-row justify-center">
        {data.map(item => {
          return (
            <div key={item.id} className="flex flex-col items-center mx-2 ">
              <img
                className="rounded-lg overflow-hidden"
                src={item.image}
                alt={item.title}
              />
              <p className="text-gray-50 hover:text-red-500 cursor-pointer my-2 z-10 ">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WHEREIPLAY;
