import React, {useEffect} from 'react';
import Baner from '../Components/Baner';

import {colors} from '../constants';
import ABOUTALLY from '../Components/HomeComponents/ABOUTALLY';
import UPCOMINGEVENTS from './../Components/HomeComponents/UPCOMINGEVENTS';
import WHEREIPLAY from './../Components/HomeComponents/WHEREIPLAY';
import VIDEOS from './../Components/HomeComponents/VIDEOS';
import MYGALLERY from './../Components/HomeComponents/MYGALLERY';
import ReactHelmet from './../Components/ReactHelmet';

function Home() {
  const handleBuyTicket = () => {
    console.log('ticket');
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const styleComponents =
    'flex flex-col justify-center items-center mx-auto z-10 xl:container mx-auto ';
  return (
    <>
      <Baner
        onClick={handleBuyTicket}
        title="NEW HOUSE"
        subTitle="MUSIC 2017"
        date="17 JANUARY, 2020"
      />
      <ReactHelmet title="MUSIC SOLI" />
      <div>
        <div className="xl:container  mx-auto">
          <div
            style={{backgroundColor: colors.background}}
            className="flex w-full justify-center items-center mx-auto z-10 mt-72 lg:pt-24 ">
            <ABOUTALLY />
          </div>
        </div>
        <div className="w-full" style={{backgroundColor: colors.secondary}}>
          <div className={styleComponents}>
            <UPCOMINGEVENTS />
          </div>
        </div>
        <div
          style={{backgroundColor: colors.background}}
          className={styleComponents}>
          <WHEREIPLAY />
        </div>
        <div className="w-full" style={{backgroundColor: colors.secondary}}>
          <div className={styleComponents}>
            <VIDEOS />
          </div>
        </div>
        <div
          style={{backgroundColor: colors.background}}
          className={styleComponents}>
          <MYGALLERY />
        </div>
      </div>
    </>
  );
}

export default Home;
