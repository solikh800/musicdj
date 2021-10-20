import React from 'react';
import {useFormikContext} from 'formik';
import AppBtn from '../appBtn';

const SubmitButton = ({title, className}) => {
  const {handleSubmit} = useFormikContext();

  return (
    <AppBtn className={className} onClick={handleSubmit}>
      {title}
    </AppBtn>
  );
};

export default SubmitButton;
