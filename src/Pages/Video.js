import React, {useEffect} from 'react';
import {colors} from '../constants';
import Baner from './../Components/Baner';
import VideoPlayer from './../Components/VideoPlayer';
import ReactHelmet from './../Components/ReactHelmet';

const videoLinks = 'http://dl.mazanddl.ir/djsoli/videos/';

const data = [
  {id: 1, videoName: 'name one', url: `${videoLinks}video1.mp4`},
  {id: 2, videoName: 'name two', url: `${videoLinks}video2.mp4`},
  {id: 3, videoName: 'name three', url: `${videoLinks}video3.mp4`},
  {id: 4, videoName: 'name four', url: `${videoLinks}video4.mp4`},
  {id: 5, videoName: 'name Five', url: `${videoLinks}video5.mp4`},
  {id: 6, videoName: 'name Six', url: `${videoLinks}video6.mp4`},
];

function Video() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Baner title="READ ABOUT ME" subTitle="VIDEOS" />
      <ReactHelmet title="VIDEOS" />
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
