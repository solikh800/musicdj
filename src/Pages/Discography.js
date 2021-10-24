import React, {useEffect} from 'react';
import {colors} from '../constants';
import Baner from './../Components/Baner';
import ReactHelmet from './../Components/ReactHelmet';
const imageLink = 'http://dl.mazanddl.ir/djsoli/disco/';
const discoData = [
  {
    id: 1,
    image: `${imageLink}01.jpg`,
    title: 'Party Hard',
    subTitle: 'LISTEN',
  },
  {
    id: 2,
    image: `${imageLink}02.jpg`,
    title: 'Deep House Mix',
    subTitle: 'LISTEN',
  },
  {
    id: 3,
    image: `${imageLink}03.jpg`,
    title: 'Pink Clouds Electro',
    subTitle: 'LISTEN',
  },
  {
    id: 4,
    image: `${imageLink}03.jpg`,
    title: 'Pink Clouds Electro',
    subTitle: 'LISTEN',
  },
];

function Discography() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Baner title="READ ABOUT ME" subTitle="DISCOGRAPHY" />
      <ReactHelmet title="DISCOGRAPHY" />
      <div
        style={{backgroundColor: colors.background}}
        className="flex flex-col justify-center items-center mx-auto z-10 mt-72 lg:pt-24 ">
        <div className="xl:w-5/6 p-4 mt-7 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {discoData.map(item => {
            return (
              <div
                className="md:flex md:flex-col w-full mb-10 mx-3 justify-center items-center"
                key={item.id}>
                <img
                  className="rounded-xl "
                  src={item.image}
                  alt={item.title}
                />
                <h5 className="text-center text-white font-bold text-lg">
                  {item.title}
                </h5>
                <p className="text-center text-red-500 ">{item.subTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Discography;
