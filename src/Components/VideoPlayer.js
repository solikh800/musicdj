import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({url, videoName}) => {
  return (
    <div className="w-11/12">
      <ReactPlayer className="w-full " width="100%" controls={true} url={url} />
      <h5 className="w-full font-bold text-gray-100">video : {videoName}</h5>
    </div>
  );
};

export default VideoPlayer;
