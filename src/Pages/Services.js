import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {colors} from '../constants';
import {fullDataServices} from '../Redux/actions/getData';
import Baner from './../Components/Baner';

function Services() {
  const dispatch = useDispatch();
  const servicesData = useSelector(state => state.data.servicesData);

  useEffect(() => {
    dispatch(fullDataServices());
  }, []);
  return (
    <>
      <Baner title="READ ABOUT ME" subTitle="SERVICES" />
      <div
        style={{backgroundColor: colors.background}}
        className="flex flex-col justify-center items-center mx-auto z-10 mt-72 lg:pt-24 ">
        <div className="xl:w-5/6 p-4 mt-7">
          {servicesData &&
            servicesData.map(item => {
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
