import React from 'react';
import VideoPlayer from '../VideoPlayer';
const data = [
  {
    id: 1,
    videoName: 'name one',
    url: 'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/video1.mp4',
  },
  {
    id: 2,
    videoName: 'name two',
    url: 'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/video2.mp4',
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
