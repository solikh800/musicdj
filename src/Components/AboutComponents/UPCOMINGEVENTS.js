import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Icon from '../../Assets/Svg/Icon';
import AppBtn from '../appBtn';

const imageLink = 'http://dl.mazanddl.ir/djsoli/abuot/';

const eventData = [
  {
    id: 1,
    date: '04 DECEMBER, 2018',
    imageUrl: `${imageLink}image01.jpg`,
    title: 'FOUND FESTIVAL 2018',
    subTitle:
      'The event has been turning the park into a sun-kissed musical paradise for the past three years.',
    isShow: true,
  },
  {
    id: 2,
    date: '07 MAY, 2018',
    imageUrl: `${imageLink}image01.jpg`,
    title: 'AZKENA ROCK FESTIVAL 2018',
    subTitle:
      'This is a two-day extravaganza in the north of Spain. It encompasses every niche of the genre, including everything from rock to pop and rap music.',
    isShow: false,
  },
  {
    id: 3,
    date: '01 JANUARY, 2018',
    imageUrl: `${imageLink}image01.jpg`,
    title: 'MAKE MUSIC PASADENA',
    subTitle:
      'The all-ages summer music festival manages to squeeze more than 150 concerts into a single day.',
    isShow: false,
  },
];

const UPCOMINGEVENTS = () => {
  const [state, setState] = useState(eventData[0]);
  return (
    <div>
      <div className="flex w-full items-start">
        <h1 className="text-white text-3xl my-8 ml-8 mr-2">------ UPCOMING </h1>
        <p className="text-red-500 text-3xl my-8">EVENTS</p>
      </div>
      <div className="relative">
        {eventData.map((item, index) => {
          const bgcolor = item.id === state.id ? 'bg-pink-600' : '';
          return (
            <div className=" md:grid md:grid-cols-12 md:gap-2" key={item.id}>
              <div
                onClick={() => setState(item)}
                style={{top: index * 50}}
                className={
                  'md:absolute  lg:left-20 xl:left-36 2xl:left-44 md:w-64 md:px-2 md:justify-start flex justify-center items-center h-10 cursor-pointer hover:bg-pink-600  ' +
                  bgcolor
                }>
                <Icon name="calendar" className="w-8 " />
                <h6 className="text-white font-bold ">{item.date}</h6>
              </div>
              <div className="md:col-span-4" />
              {item.id === state.id ? (
                <div className="md:col-span-8 py-4 px-7">
                  <NavLink to="/blog">
                    <img
                      className="rounded-lg overflow-hidden cursor-pointer"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                  </NavLink>
                  <NavLink to="/blog">
                    <h4 className="text-gray-100 hover:text-pink-600 cursor-pointer font-bold text-lg mt-3">
                      {item.title}
                    </h4>
                  </NavLink>
                  <p className="text-gray-400 text-sm mb-5">{item.subTitle}</p>
                  <NavLink to="/blog">
                    <AppBtn className="bg-pink-500 hover:bg-pink-700">
                      READ MORE
                    </AppBtn>
                  </NavLink>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="mb-8" />
    </div>
  );
};

export default UPCOMINGEVENTS;
