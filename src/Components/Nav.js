import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav({name, to}) {
  const activeStyleClass = {
    borderBottomColor: '#c22ef7',
    borderBottomWidth: 2,
  };
  return (
    <NavLink
      exact
      activeStyle={activeStyleClass}
      className=" md:text-xs font-bold px-2 pb-2 text-white hover:text-red-500 "
      to={to}>
      <p className="w-max">{name.toUpperCase()}</p>
    </NavLink>
  );
}

export default Nav;
