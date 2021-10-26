import React from 'react';
import Nav from './Nav';
import {NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {userData} from '../Redux/actions/user';
import Icon from './../Assets/Svg/Icon/index';

const NavLinks = ({onClick}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.userData);
  return (
    <div className="lg:flex lg:w-ful ">
      <div className="md:flex">
        <Nav name="Home" to="/" iconName="home" onClick={onClick} />
        <Nav name="Events" to="/events" iconName="event" onClick={onClick} />
        <Nav
          name="Services"
          to="/services"
          iconName="service"
          onClick={onClick}
        />
        <Nav
          name="Discography"
          to="/discography"
          iconName="glass"
          onClick={onClick}
        />
        <Nav name="gallery" to="/gallery" iconName="images" onClick={onClick} />
        <Nav name="Video" to="/video" iconName="video" onClick={onClick} />
        <Nav name="Blog" to="/blog" iconName="blog" onClick={onClick} />
        <Nav
          name="Contact"
          to="/contact"
          iconName="contact"
          onClick={onClick}
        />
        <Nav name="Abuot Me" to="/abuot" iconName="about" onClick={onClick} />
      </div>
      <div className=" text-sm flex items-center justify-between md:justify-end px-2 sm:pr-20 md:pr-0">
        {token ? (
          <>
            <NavLink to="/dashboard">
              <div
                onClick={onClick}
                className="group flex items-center cursor-pointer">
                <Icon
                  name="user"
                  className="w-7 mr-0 text-gray-100 group-hover:text-purple-600 "
                />
                <p className="text-red-600 font-bold group-hover:text-purple-600 ">
                  Dashboard
                </p>
              </div>
            </NavLink>
            <div
              onClick={() => dispatch(userData(null))}
              className="group flex items-center cursor-pointer">
              <Icon
                name="signOff"
                className="w-8 mr-0 text-gray-100 group-hover:text-purple-600 "
              />
              <p className=" text-red-600 font-bold group-hover:text-purple-600 ">
                Log Out
              </p>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/Login">
              <div
                onClick={onClick}
                className="group flex items-center cursor-pointer">
                <Icon
                  name="signIn"
                  className="w-8 mr-0 text-gray-100 group-hover:text-purple-600 "
                />
                <p className="text-red-600 font-bold group-hover:text-purple-600 ">
                  Login
                </p>
              </div>
            </NavLink>
            <NavLink to="/Register">
              <div
                onClick={onClick}
                className="group flex items-center cursor-pointer">
                <Icon
                  name="signUp"
                  className="w-8 mr-0 text-gray-100 group-hover:text-purple-600 "
                />
                <p className="text-red-600 font-bold group-hover:text-purple-600 ">
                  Register
                </p>
              </div>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default NavLinks;
