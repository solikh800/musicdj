import React, {useState} from 'react';
import Icon from '../Assets/Svg/Icon';
import NavLinks from '../Components/NavLinks';
import SlideDrawer from '../Components/SlideDrawer';
import {colors, images} from '../constants';

function NavBar() {
  const [backGround, setbackGround] = useState('md:bg-transparent');
  const [margin, setmargin] = useState('my-6');
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [translate, setTranslate] = useState('-translate-x-full h-0');
  const changeBackgroundNav = () => {
    if (window.scrollY >= 100) {
      setbackGround('md:bg-gray-800');
      setmargin('my-3');
    } else {
      setbackGround('md:bg-transparent');
      setmargin('my-6');
    }
  };

  window.addEventListener('scroll', changeBackgroundNav);

  const openDrawer = () => {
    setDrawerIsOpen(true);
    setTranslate('translate-x-0');
  };
  const closeDrawer = () => {
    setDrawerIsOpen(false);
    setTranslate('-translate-x-full ');
    setTimeout(() => {
      setTranslate('-translate-x-full h-0');
    }, 200);
  };
  return (
    <div className={'fixed flex-row mx-auto w-full z-40 ' + backGround}>
      {!drawerIsOpen && (
        <div className="absolute">
          <Icon
            name="drawer"
            className="md:hidden w-11 sm:w-12"
            onClick={openDrawer}
          />
        </div>
      )}
      <div className="absolute  md:inline-block z-20 hidden">
        <button
          onClick={() => console.log('Go to home')}
          className={
            'text-white flex flex-row-reverse justify-center ml-4 items-center rounded-2xl text-base font-bold w-min px-2 z-50 ' +
            margin +
            ' ' +
            backGround
          }>
          MUSIC SOLY
          <img src={images.logo} alt="logo" className="w-10 h-10 z-50 mx-4 " />
        </button>
      </div>

      <div className={'hidden md:flex md:ml-40 ' + margin}>
        <NavLinks />
      </div>

      <div
        className={
          translate + ' w-screen md:hidden  transform duration-700 flex'
        }>
        <div
          className=" w-4/6 z-50"
          style={{backgroundColor: colors.background}}>
          <SlideDrawer onClick={closeDrawer} />
        </div>
        <div
          onClick={closeDrawer}
          className="md:hidden w-2/6 bg-transparent z-50"></div>
      </div>
    </div>
  );
}

export default NavBar;
