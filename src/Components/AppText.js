import React from 'react';

function AppText({children, className}) {
  return (
    <p
      className={
        'text-gray-50 my-2 text-xs lg:text-base text-center ' + className
      }>
      {children}
    </p>
  );
}

export default AppText;
