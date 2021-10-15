import React from 'react';

function AppText({children, className}) {
  return (
    <p
      className={
        className + ' text-gray-50 my-2 text-xs lg:text-base text-center '
      }>
      {children}
    </p>
  );
}

export default AppText;
