import React from 'react';
import AppText from './AppText';

function Footer() {
  return (
    <div className="bg-gray-900 p-6">
      <AppText className="text-xl font-bold">MUSIC</AppText>
      <AppText className="text-xl font-bold ">ALLY</AppText>
      <AppText className="text-gray-400">
        The best thing about being a DJ is making people happy. There is nothing{' '}
      </AppText>
      <AppText className="text-gray-400">
        like seeing people get up from a table to dance or the expression on
        their{' '}
      </AppText>
      <AppText className="text-gray-400">
        face when they hear a song they love. I also love to educate people on
      </AppText>
      <AppText className="text-gray-400">music they have never heard.</AppText>
      <AppText>Copyright © 2021 MusicAlly. All Rights Reserved</AppText>
    </div>
  );
}

export default Footer;
