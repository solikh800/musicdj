import React, {useState} from 'react';
import Nav from '../Components/Nav';
import Icon from '../Assets/Svg/Icon';
import NavLinks from '../Components/NavLinks';
import SlideDrawer from '../Components/SlideDrawer';
import {colors} from '../constants';

function NavBar() {
  const [backGround, setbackGround] = useState('md:bg-transparent');
  const [margin, setmargin] = useState('my-10');
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [translate, setTranslate] = useState('-translate-x-full');
  const changeBackgroundNav = () => {
    if (window.scrollY >= 100) {
      setbackGround('md:bg-gray-800');
      setmargin('my-4');
    } else {
      setbackGround('md:bg-transparent');
      setmargin('my-10');
    }
  };

  window.addEventListener('scroll', changeBackgroundNav);

  const openDrawer = () => {
    setDrawerIsOpen(true);
    setTranslate('translate-x-0');
  };
  const closeDrawer = () => {
    setDrawerIsOpen(false);
    setTranslate('-translate-x-full h-0');
  };
  return (
    <div className={'fixed flex-row mx-auto w-full z-40 ' + backGround}>
      {!drawerIsOpen && (
        <div className="absolute">
          <Icon name="drawer" className="md:hidden" onClick={openDrawer} />
        </div>
      )}
      <div className="absolute md:inline-flex z-20 hidden">
        <button
          onClick={() => console.log('Go to home')}
          className={
            'text-white rounded-2xl text-lg font-bold w-min px-2 z-50 ' +
            margin +
            ' ' +
            backGround
          }>
          MUSIC ALLY
        </button>
      </div>
      <div className={'hidden md:flex md:ml-20 ' + margin}>
        <NavLinks />
      </div>

      <div
        className={
          translate + ' w-screen md:hidden  transform duration-700 flex'
        }>
        <div
          className=" w-4/5 z-50"
          style={{backgroundColor: colors.background}}>
          <SlideDrawer onClick={closeDrawer} />
        </div>
        <div
          onClick={closeDrawer}
          className="md:hidden w-1/5 bg-transparent z-50"></div>
      </div>
    </div>
  );
}

export default NavBar;
