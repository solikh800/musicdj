import React, {useState} from 'react';
import Baner from '../Components/Baner';
import Icon from '../Assets/Svg/Icon/';

import {colors} from '../constants';
import WHEREIPLAY from './../Components/HomeComponents/WHEREIPLAY';
import MUSICTRACKS from './../Components/HomeComponents/MUSICTRACKS';
const dataImage = [
  {
    id: 1,
    url: 'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-slider-img01.jpg',
    title: 'image1',
  },
  {
    id: 2,
    url: 'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-slider-img02.jpg',
    title: 'image2',
  },
  {
    id: 3,
    url: 'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-slider-img03.jpg',
    title: 'image3',
  },
];
function Abuot() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nexSlide = () => {
    if (slideIndex !== dataImage.length) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(dataImage.length);
    }
  };

  const styleComponents =
    'flex flex-col justify-center items-center 2xl:container mx-auto z-10 ';
  return (
    <>
      {/* title and baner */}
      <Baner title="READ ABOUT ME" subTitle="MY STORY" />

      {/* About Me */}
      <div
        style={{backgroundColor: colors.background}}
        className=" flex flex-col justify-center items-center mx-auto z-10 mt-72 lg:pt-24 ">
        <p className="text-gray-400 text-left mt-10 px-3 pb-2 text-xs md:text-base xl:text-lg md:w-3/4 xl:w-2/3">
          Allyis a professional and versatile DJ who can play dance music for
          any type of party. Her experience includes two years as a resident DJ
          at RaKuen Lounge in Downtown. She also possesses a significant amount
          of mobile DJ experience.
        </p>
        <p className="text-gray-400 text-left my-2 pb-6 px-3 text-xs md:text-base xl:text-lg md:w-3/4 xl:w-2/3">
          In November 2013, she began working for a prestigious mobile DJ
          company where she quickly became one of their top DJs. There she would
          constantly play two to four gigs a week providing her services at
          various events, such as Weddings, Birthday Parties, High School Proms,
          Balls, Graduation Parties, Corporate Events, and more.
        </p>

        {/* slider image */}
        <div className=" relative w-screen h-80 sm:h-96 md:h-96 lg:h-105 xl:h-115 2xl:h-120 mb-5 md:w-3/4 lg:w-4/6 xl:w-4/6">
          <Icon
            name="left"
            className=" absolute text-gray-400 w-12 md:w-14 xl:w-16 z-50 bottom-1/2 left-0 "
            onClick={prevSlide}
          />
          <Icon
            name="right"
            className=" absolute text-gray-400 w-12 md:w-14 xl:w-16 z-50 bottom-1/2 right-0 "
            onClick={nexSlide}
          />

          <div className=" mx-auto flex flex-col items-center  ">
            {dataImage.map((item, index) => {
              const activeAnim =
                index + 1 === slideIndex ? 'opacity-100' : 'opacity-0';
              return (
                <img
                  className={
                    'absolute overflow-hidden rounded-xl w-full h-80 sm:h-96 md:h-96 lg:h-105 xl:h-115 2xl:h-120  ' +
                    activeAnim
                  }
                  src={item.url}
                  alt={item.title}
                />
              );
            })}
          </div>
        </div>
        <div className="flex ">
          <div className="   flex z-50">
            {Array.from({length: dataImage.length}).map((item, index) => {
              const activeAnim =
                index + 1 === slideIndex ? 'bg-gray-600' : 'bg-gray-100';
              const movDot = index => {
                setSlideIndex(index);
              };
              return (
                <div
                  onClick={() => movDot(index + 1)}
                  className={
                    'w-3 h-3 cursor-pointer hover:bg-red-600 rounded-full m-2 z-50 ' +
                    activeAnim
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{backgroundColor: colors.background}}
        className={styleComponents}>
        <WHEREIPLAY />
      </div>
      <div
        style={{backgroundColor: colors.secondary}}
        className={styleComponents}>
        <MUSICTRACKS />
      </div>
    </>
  );
}

export default Abuot;
