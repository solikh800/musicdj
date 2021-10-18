import React from 'react';
import Icon from '../Assets/Svg/Icon/index';

const ImageContainer = ({imageName, url, showModalComponent}) => {
  return (
    <div
      onClick={showModalComponent}
      className="  hover:opacity-50 opacity-100 z-10 cursor-pointer transform hover:scale-105">
      <img className="m-2 rounded-lg " src={url} alt={imageName} />
      <div className=" absolute rounded-lg  opacity-0 hover:opacity-100 z-50 top-0 l-0 w-full h-full">
        <Icon
          className="absolute w-14 h-14 left-1/3 top-1/3 text-white"
          name="zoom"
        />
      </div>
    </div>
  );
};

export default ImageContainer;
