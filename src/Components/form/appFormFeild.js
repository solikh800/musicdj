import React from 'react';
import {useFormikContext} from 'formik';
import ErrorMessage from './errorMessage';

const AppFormFeild = ({name, textArea, ...rest}) => {
  const {setFieldTouched, touched, errors, values, setFieldValue} =
    useFormikContext();
  if (textArea === true) {
    return (
      <div className="flex flex-col items-center ">
        <textarea
          className="m-1 p-3 w-3/4 text-xs md:text-sm bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent h-56 "
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
    <div className="flex flex-col  items-center ">
      <input
        className="m-1 p-3 w-3/4 text-xs md:text-sm bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent "
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
