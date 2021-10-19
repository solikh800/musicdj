import React from 'react';

const AppBtn = ({children, onClick, className}) => {
  return (
    <div className="flex flex-col w-full items-center mt-2 mb-10 ">
      <div
        onClick={onClick}
        className={
          'button w-max bg-gray-700 rounded-lg p-3 px-5 text-white font-bold hover:bg-gray-500 transform hover:-translate-y-1 hover:scale-105 transition ease-in duration-200 cursor-pointer ' +
          className
        }>
        {children}
      </div>
    </div>
  );
};

export default AppBtn;
