import React from 'react';
import MusicPlayer from './../MusicPlayer';

const url =
  'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/sound.mp3';
const MUSICTRACKS = () => {
  return (
    <div className="flex w-screen flex-col xl:flex-row  my-20 px-6">
      <MusicPlayer url={url} />
    </div>
  );
};

export default MUSICTRACKS;
