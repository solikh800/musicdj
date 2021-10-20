import React from 'react';
import {colors} from '../constants';
import Baner from './../Components/Baner';

const servicesData = [
  {
    id: 1,
    title: 'WEDDINGS',
    subTitle:
      'With weddings, I like to get a better idea of what the bride and groom - as well as their guest s - like to listen to so I can be sure to play all the songs that will please the crowd. I ll even help you out and provide you with a song sheet that you can fill out.',
    logo: 'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-services-icons01.png',
    image:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-services-img01.jpg',
  },
  {
    id: 2,
    title: 'CLUBS AND BARS',
    subTitle:
      'I utilize impressive dance moves and choreography numbers to show your guests exactly how to have a good time. Youre sure to have the time of your life. I can make any nightclub or thematic bar a hotter place and make the night rock!',
    logo: 'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-services-icons02.png',
    image:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-services-img02.jpg',
  },
  {
    id: 3,
    title: 'CORPORATE EVENTS',
    subTitle:
      'I like to play suitable and appropriate music that will engage the crowd and get them loosened up for what s to come throughout your corporate event. My goal is to get your guests singing and grooving along to songs that are associated with feel-good-happy feelings.',
    logo: 'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-services-icons03.png',
    image:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-services-img03.jpg',
  },
  {
    id: 4,
    title: 'PLAYLIST CREATION',
    subTitle:
      'I specialize in playing more modern styles of music, including but not limited to: Pop, Top 40, Hip-Hop, Dance, House.  I also very much enjoy playing the classics from the 60 s, 70 s, 80’s, 90’s, and early 2000’s. I can help you make the right choice and create a perfect playlist.',
    logo: 'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-services-icons04.png',
    image:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-services-img04.jpg',
  },
  {
    id: 5,
    title: 'DJ LESSONS',
    subTitle:
      'I often organize group and individual lessons and master classes to educate people and teach them to combine and create music. If you would like to learn more and develop your music taste - feel free to contact me and schedule the lesson.',
    logo: 'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-services-icons05.png',
    image:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-services-img05.jpg',
  },
];

function Services() {
  return (
    <>
      <Baner title="READ ABOUT ME" subTitle="SERVICES" />
      <div
        style={{backgroundColor: colors.background}}
        className="flex flex-col justify-center items-center mx-auto z-10 mt-72 lg:pt-24 ">
        <div className="xl:w-5/6 p-4 mt-7">
          {servicesData.map(item => {
            return (
              <div className="mb-10 md:grid md:grid-cols-5" key={item.id}>
                <div className="md:col-span-3">
                  <img
                    className="rounded-lg"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="md:col-span-2 grid grid-cols-3 mt-1 p-2">
                  <div className="col-span-1 flex justify-end items-start pr-5">
                    <img src={item.logo} alt={item.title} />
                  </div>
                  <div className="col-span-2 px-2">
                    <h5 className="text-white font-bold text-lg mb-2">
                      {item.title}
                    </h5>
                    <p className="text-gray-500 text-sm ">{item.subTitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Services;
