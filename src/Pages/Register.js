import React, {useEffect, useState} from 'react';
import Baner from '../Components/Baner';
import * as Yup from 'yup';
import {AppForm, AppFormFeild, SubmitButton} from './../Components/form';
import {ToastContainer, toast} from 'react-toastify';
import {register} from './../Services/server';
import ProgresBar from '../Components/ProgresBar';
import {colors} from '../constants';
import ReactHelmet from './../Components/ReactHelmet';
import Icon from '../Assets/Svg/Icon';
import {NavLink} from 'react-router-dom';

const validationSchema = Yup.object().shape({
  userName: Yup.string().required().min(5).max(264).label('UserName'),
  email: Yup.string().required().email().min(6).max(264).label('Email'),
  password: Yup.string().required().min(6).max(264).label('Password'),
});
function Register({history}) {
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (dataUser, resetForm) => {
    setVisible(true);
    try {
      const {status} = await register(dataUser);
      if (status === 201) {
        toast.success('Thanks. Your account has been created ', {
          position: 'top-right',
          closeOnClick: true,
        });
        resetForm();
        setVisible(false);
        history.replace('/Login');
      }
    } catch (error) {
      if (!!error.message) {
        if (error.response !== undefined) {
          toast.error(error.response.data.message, {
            position: 'top-right',
            closeOnClick: true,
          });
        } else {
          toast.error('Error from server', {
            position: 'top-right',
            closeOnClick: true,
          });
        }
      }
      setTimeout(() => {
        setVisible(false);
      }, 1000);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 200);
  }, []);
  return (
    <>
      <Baner title="READ ABOUT ME" subTitle="SIGN UP" />
      <ReactHelmet title="SIGN UP" />
      <div
        style={{backgroundColor: colors.background}}
        className="flex flex-col justify-center items-center mx-auto z-10 mt-72 lg:pt-24 ">
        <div className="mt-2 mb-8 ">
          <Icon className="w-14 mb-0 " name="signUp" />
          <h5 className="text-center text-white text-lg mt-0 pt-0 font-bold">
            Register
          </h5>
        </div>
        {visible && <ProgresBar loading={visible} />}
        <div className="w-full md:w-4/5 xl:w-4/6">
          <AppForm
            initialValues={{
              userName: '',
              email: '',
              password: '',
            }}
            onSubmit={(dataUser, {resetForm}) =>
              handleSubmit(dataUser, resetForm)
            }
            validationSchema={validationSchema}>
            <div>
              <AppFormFeild
                name="userName"
                type="text"
                placeholder="Enter your UserName *"
              />
              <AppFormFeild
                name="email"
                type="email"
                placeholder="Enter your Email *"
              />
              <AppFormFeild
                name="password"
                type="password"
                placeholder="create a password *"
              />
            </div>
            <div className="flex w-full justify-center items-center text-center my-3">
              <input type="checkbox" className=" bg-gray-500" />
              <div className="flex  text-center items-center justify-center">
                <label className="text-gray-300 text-xs md:text-sm mx-2 ">
                  I agree with
                </label>
                <p className="text-blue-400 hover:text-blue-600 text-xs font-bold md:text-sm cursor-pointer">
                  Terms and Privacy
                </p>
              </div>
            </div>

            <SubmitButton
              className="bg-blue-600 hover:bg-blue-800"
              title="Create Account"
            />
          </AppForm>
          <div className="flex mb-10 text-center items-center justify-center">
            <label className="text-gray-300 text-xs md:text-sm mx-2 ">
              Already have an account?
            </label>
            <NavLink to="/Login">
              <p className="text-blue-400 hover:text-blue-600 text-xs font-bold md:text-sm cursor-pointer">
                Log in
              </p>
            </NavLink>
          </div>
          <ToastContainer theme="colored" />
        </div>
      </div>
    </>
  );
}

export default Register;
