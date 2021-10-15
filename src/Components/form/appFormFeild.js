import React from 'react';
import {useFormikContext} from 'formik';
import ErrorMessage from './errorMessage';

const AppFormFeild = ({name, textArea, ...rest}) => {
  const {setFieldTouched, touched, errors, values, setFieldValue} =
    useFormikContext();
  if (textArea === true) {
    return (
      <div className="flex flex-col w-screen items-center ">
        <textarea
          className="m-1 p-4 w-3/4 lg:w-1/2 2xl:w-3/5 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent h-56 "
          onChange={event => setFieldValue(name, event.target.value)}
          value={values[name]}
          onBlur={() => setFieldTouched(name)}
          {...rest}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </div>
    );
  }
  return (
    <div className="flex flex-col  w-screen items-center ">
      <input
        className="m-1 p-4 w-3/4 lg:w-1/2 2xl:w-3/5 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent "
        onChange={event => setFieldValue(name, event.target.value)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default AppFormFeild;
