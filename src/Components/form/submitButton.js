import React from 'react';
import {useFormikContext} from 'formik';
import AppBtn from '../appBtn';

const SubmitButton = ({title}) => {
  const {handleSubmit} = useFormikContext();

  return <AppBtn onClick={handleSubmit}>{title}</AppBtn>;
};

export default SubmitButton;
