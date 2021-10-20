import React from 'react';
import Icon from '../Assets/Svg/Icon/index';

const ImageContainer = ({imageName, url, showModalComponent}) => {
  return (
    <div
      onClick={showModalComponent}
      className=" relative hover:opacity-50 opacity-100 z-10 cursor-pointer transform hover:scale-105 ">
      <img className="m-2 rounded-lg " src={url} alt={imageName} />
      <div className=" absolute flex justify-center items-center rounded-lg opacity-0 hover:opacity-100 text-opacity-100 z-50 top-0 left-0 w-full h-full">
        <Icon className=" opacity-100 text-white  w-11 h-11 z-50" name="zoom" />
      </div>
    </div>
  );
};

export default ImageContainer;
