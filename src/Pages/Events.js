import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppBtn from '../Components/appBtn';
import {colors} from '../constants';
import {fullDataEvent} from '../Redux/actions/getData';
import Baner from './../Components/Baner';
import BuyTickets from './../Components/BuyTickets';

function Events() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setIitleModal] = useState();

  const eventsData = useSelector(state => state.data.eventData);

  useEffect(() => {
    dispatch(fullDataEvent());
  }, []);

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
        {eventsData &&
          eventsData.map((item, index) => {
            const row = index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse';
            return (
              <div key={item._id} className={'md:flex mt-5 p-2 ' + row}>
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
                    <p className="text-gray-400 text-sm mb-4">
                      {item.subTitle}
                    </p>
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
