import React from 'react';
import {NavLink} from 'react-router-dom';
import AppBtn from './../appBtn';

const data = [
  {
    id: 1,
    day: '04',
    date: 'DECEMBER, 2018',
    title: 'FOUND FESTIVAL 2018',
    subTitle:
      'The event has been turning the park into a sun-kissed musical paradise for the past three years.',
  },
  {
    id: 2,
    day: '01',
    date: 'JANUARY, 2018',
    title: 'MAKE MUSIC PASADENA',
    subTitle:
      'The all-ages summer music festival manages to squeeze more than 150 concerts into a single day.',
  },
  {
    id: 3,
    day: '07',
    date: 'MAY, 2018',
    title: 'AZKENA ROCK FESTIVAL 2018',
    subTitle:
      'This is a two-day extravaganza in the north of Spain. It encompasses every niche of the genre, including everything from rock to pop and rap music.',
  },
];

const UPCOMINGEVENTS = () => {
  return (
    <div className="flex w-full flex-col my-20 px-6">
      <div>
        <h1 className="text-white text-2xl my-8">
          --- UPCOMING <p className="text-red-500 ml-12">EVENTS</p>
        </h1>
        <div className="md:grid md:grid-cols-3 md:gap-4 justify-center px-4 ">
          {data.map(item => {
            return (
              <div key={item.id} className="flex flex-row my-6 ">
                <div className="text-red-500 text-2xl xl:text-3xl font-bold font-mono pr-5">
                  <p>{item.day}</p>
                </div>
                <div>
                  <h5 className="text-gray-400 text-sm xl:text-base">
                    {item.date}
                  </h5>
                  <h3 className="text-gray-50 text-lg xl:text-2xl py-1 hover:text-red-500 cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm xl:text-base">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <NavLink className="flex w-full items-center" to="/events">
          <AppBtn className="bg-gray-200 border-2 cursor-pointer ">
            VIEW ALL EVENTS
          </AppBtn>
        </NavLink>
      </div>
    </div>
  );
};

export default UPCOMINGEVENTS;
