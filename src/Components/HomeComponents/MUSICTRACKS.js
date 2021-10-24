import React from 'react';
import {images} from '../../constants';
import MusicPlayer from './../MusicPlayer';

const musicLink = 'https://dl.mazanddl.ir/djsoli/homevideo/sound.mp3';

const data = [
  {id: 1, musicName: 'Best music', url: {musicLink}},
  {id: 2, musicName: 'Nice music', url: {musicLink}},
  {id: 3, musicName: 'Pop music', url: {musicLink}},
];

const MUSICTRACKS = () => {
  return (
    <div
      className="w-full px-6 py-6"
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
