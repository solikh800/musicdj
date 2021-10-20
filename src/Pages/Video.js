import React from 'react';
import {colors} from '../constants';
import Baner from './../Components/Baner';
import VideoPlayer from './../Components/VideoPlayer';

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
  {
    id: 3,
    videoName: 'name three',
    url: 'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/video3.mp4',
  },
  {
    id: 4,
    videoName: 'name fore',
    url: 'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/video4.mp4',
  },
  {
    id: 5,
    videoName: 'name Five',
    url: 'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/video5.mp4',
  },
  {
    id: 6,
    videoName: 'name Six',
    url: 'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/video-6.mp4',
  },
];

function Video() {
  return (
    <>
      <Baner title="READ ABOUT ME" subTitle="VIDEOS" />
      <div
        style={{backgroundColor: colors.background}}
        className=" flex flex-col xl:w-4/5 lg:w-5/6 justify-center items-center mx-auto z-10 mt-72 lg:pt-24 ">
        <div className="md:grid md:grid-cols-2 flex flex-col items-center gap-3 mb-14">
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
    </>
  );
}

export default Video;
