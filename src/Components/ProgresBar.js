import React from 'react';
import Lottie from 'lottie-react';
import loadingFile from '../Assets/Svg/loading.json';

function ProgresBar(loading) {
  return (
    <div className="flex justify-center items-center absolute w-screen h-screen  bg-transparent">
      <div className="w-72 z-50">
        <Lottie animationData={loadingFile} />
      </div>
    </div>
  );
}

export default ProgresBar;
