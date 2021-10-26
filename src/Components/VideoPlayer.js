import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({url, videoName}) => {
  return (
    <div className="w-11/12">
      <ReactPlayer className="w-full " width="100%" controls={true} url={url} />
      <p className="w-full mt-5 text-sm font-bold text-gray-100">
        video : {videoName}
      </p>
    </div>
  );
};

export default VideoPlayer;
