import React from 'react';

const ErrorMessage = ({error, visible}) => {
  if (!error || !visible) {
    return null;
  }
  return (
    <div>
      <p className="text-red-500 font-bold text-xs m-2 mt-2">{error}</p>
    </div>
  );
};

export default ErrorMessage;
