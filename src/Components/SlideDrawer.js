import React from 'react';
import NavLinks from './NavLinks';
import Icon from '../Assets/Svg/Icon';

const SlideDrawer = ({onClick}) => {
  return (
    <div className="md:hidden h-screen p-4 z-50">
      <div className="absolute md:hidden left-2/3 ">
        <Icon name="close" className="text-red-600" onClick={onClick} />
      </div>
      <NavLinks />;
    </div>
  );
};

export default SlideDrawer;
