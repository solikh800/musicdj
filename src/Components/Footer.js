import React from 'react';
import AppText from './AppText';
import {images} from '../constants';
import Icon from '../Assets/Svg/Icon';

function Footer() {
  return (
    <div className=" relative bg-gray-900 p-6 justify-center">
      <div className="flex w-full justify-center items-center mb-10 ">
        <img className="w-12 h-12 mr-2" src={images.logo} alt="logo" />
        <div>
          <AppText className="text-lg font-bold pb-0 mb-0 ">MUSIC</AppText>
          <AppText className="text-lg font-bold pt-0 mt-0">ALLY</AppText>
        </div>
      </div>

      <AppText className="text-gray-400 mb-0 mt-0">
        The best thing about being a DJ is making people happy. There is nothing{' '}
      </AppText>
      <AppText className="text-gray-400 mb-0 mt-0">
        like seeing people get up from a table to dance or the expression on
        their{' '}
      </AppText>
      <AppText className="text-gray-400 mb-0 mt-0">
        face when they hear a song they love. I also love to educate people on
      </AppText>
      <AppText className="text-gray-400 mb-0 mt-0">
        music they have never heard.
      </AppText>
      <div className="flex justify-center items-center my-4">
        <Icon
          className="text-red-500 w-7 "
          onClick={() => console.log('icon Button')}
          name="facebook"
        />
        <Icon
          className="text-red-500 w-9"
          onClick={() => console.log('icon Button')}
          name="twitter"
        />
        <Icon
          className="text-red-500 w-9"
          onClick={() => console.log('icon Button')}
          name="linkedin"
        />
        <Icon
          className="text-red-500 w-9"
          onClick={() => console.log('icon Button')}
          name="instagram"
        />
        <Icon
          className="text-red-500 w-11"
          onClick={() => console.log('icon Button')}
          name="google"
        />
      </div>
      <AppText className="text-white">
        Copyright © 2021 MusicAlly. All Rights Reserved
      </AppText>
    </div>
  );
}

export default Footer;
