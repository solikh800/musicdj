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
      className="text-xs px-2 text-white"
      to={to}>
      <p className="w-max">{name.toUpperCase()}</p>
    </NavLink>
  );
}

export default Nav;
