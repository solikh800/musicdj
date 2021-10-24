import React from 'react';
import VideoPlayer from '../VideoPlayer';
const videoLink = 'http://dl.mazanddl.ir/djsoli/homevideo/';
const data = [
  {
    id: 1,
    videoName: 'name one',
    url: `${videoLink}video1.mp4`,
  },
  {
    id: 2,
    videoName: 'name two',
    url: `${videoLink}video2.mp4`,
  },
];
const VIDEOS = () => {
  return (
    <div className="flex w-full flex-col my-20 px-6">
      <h1 className="text-white text-3xl my-8">------ VIDEOS</h1>
      <div className="md:grid md:grid-cols-2 2xl:gap-48 gap-3">
        {data.map(item => {
          return (
            <VideoPlayer
              key={item.id}
              videoName={item.videoName}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VIDEOS;
