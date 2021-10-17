import React from 'react';
import {images} from '../../constants';
import MusicPlayer from './../MusicPlayer';

const data = [
  {
    id: 1,
    musicName: 'Best music',
    url: 'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/sound.mp3',
  },
  {
    id: 2,
    musicName: 'Nice music',
    url: 'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/sound.mp3',
  },
  {
    id: 3,
    musicName: 'Pop music',
    url: 'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/sound.mp3',
  },
];

const MUSICTRACKS = () => {
  return (
    <div
      className="w-screen px-6 py-6"
      style={{
        backgroundImage: ` url(${images.musicTracks})`,
        backgroundSize: 'cover',
      }}>
      <h1 className="text-white text-3xl my-8">------ MUSIC TRACKS</h1>
      <div className=" z-20 p-6">
        {data.map(item => {
          return (
            <MusicPlayer
              key={item.id}
              url={item.url}
              musicName={item.musicName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MUSICTRACKS;
