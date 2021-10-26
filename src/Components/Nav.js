import React from 'react';
import {NavLink} from 'react-router-dom';
import Icon from '../Assets/Svg/Icon';

function Nav({name, to, iconName, onClick}) {
  const activeStyleClass = {
    borderBottomColor: '#c22ef7',
    borderBottomWidth: 2,
  };
  return (
    <div
      onClick={onClick}
      className="flex items-center  w-2/3 hover:bg-gray-700 rounded-md hover:text-red-500">
      <Icon className="md:hidden  w-9 text-purple-500" name={iconName} />
      <NavLink
        exact
        activeStyle={activeStyleClass}
        className="md:w-min py-3 text-xs flex w-36 font-bold px-2 md:pb-2 text-white "
        to={to}>
        <p className="w-max">{name.toUpperCase()}</p>
      </NavLink>
    </div>
  );
}

export default Nav;
