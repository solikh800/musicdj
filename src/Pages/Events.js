import React, {useState} from 'react';
import AppBtn from '../Components/appBtn';
import {colors} from '../constants';
import Baner from './../Components/Baner';
import BuyTickets from './../Components/BuyTickets';
const eventsData = [
  {
    id: 1,
    numberDate: '04',
    date: 'DECEMBER, 2018',
    title: 'FOUND FESTIVAL 2018',
    subTitle:
      'The event has been turning the park into a sun-kissed musical paradise for the past three years.',
    image:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-events-img01.jpg',
    price: '39$',
  },
  {
    id: 2,
    numberDate: '01',
    date: 'JANUARY, 2018',
    title: 'MAKE MUSIC PASADENA',
    subTitle:
      'The all-ages summer music festival manages to squeeze more than 150 concerts into a single day.',
    image:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-events-img02.jpg',
    price: '41$',
  },
  {
    id: 3,
    numberDate: '03',
    date: 'MAY, 2018',
    title: 'AZKENA ROCK FESTIVAL 2018',
    subTitle:
      'This is a two-day extravaganza in the north of Spain. It encompasses every niche of the genre, including everything from rock to pop and rap music.',
    image:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-events-img03.jpg',
    price: '28$',
  },
  {
    id: 4,
    numberDate: '01',
    date: 'MAY, 2018',
    title: 'MIDDLELANDS 2018',
    subTitle:
      'The all-ages summer music festival manages to squeeze more than 150 concerts into a single day.',
    image:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-events-img04.jpg',
    price: '35$',
  },
];

function Events() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setIitleModal] = useState();
  const openModal = (title, price) => {
    setIitleModal({
      title,
      price,
    });
    setShowModal(true);
  };
  return (
    <>
      {/* title and baner */}
      <Baner title="READ ABOUT ME" subTitle="UPCOMING EVENTS" />

      {/* About Me */}
      <div
        style={{backgroundColor: colors.background}}
        className=" flex flex-col xl:w-4/5 lg:w-5/6 justify-center items-center mx-auto z-10 mt-72 lg:pt-24 ">
        {eventsData.map((item, index) => {
          const row = index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse';
          return (
            <div key={item.id} className={'md:flex mt-5 p-2 ' + row}>
              <div className="md:col-span-3">
                <img
                  className="rounded-lg mb-2"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="grid grid-cols-4 md:w-3/5 lg:mt-10 ">
                <div className="col-span-1 text-right px-2 ">
                  <p className="text-red-500 font-bold text-2xl ">
                    {item.numberDate}
                  </p>
                </div>
                <div className="col-span-3 pl-3 pr-6">
                  <p className="text-gray-400">{item.date}</p>
                  <p className="text-gray-50 text-lg mb-4">{item.title}</p>
                  <p className="text-gray-400 text-sm mb-4">{item.subTitle}</p>
                  <AppBtn
                    className="bg-red-500 hover:bg-red-800 "
                    onClick={() => openModal(item.title, item.price)}>
                    BUY TICKETS
                  </AppBtn>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {showModal ? (
        <BuyTickets
          title={titleModal.title}
          price={titleModal.price}
          showModal={showModal}
          hiddenModalComponent={() => setShowModal(false)}
        />
      ) : null}
      <div className="mb-20" />
    </>
  );
}

export default Events;
