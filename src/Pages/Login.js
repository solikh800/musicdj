import React, {useEffect, useState} from 'react';
import Baner from '../Components/Baner';
import * as Yup from 'yup';
import {AppForm, AppFormFeild, SubmitButton} from './../Components/form';
import {ToastContainer, toast} from 'react-toastify';
import {login} from './../Services/server';
import ProgresBar from '../Components/ProgresBar';
import {colors} from '../constants';
import ReactHelmet from './../Components/ReactHelmet';
import Icon from '../Assets/Svg/Icon';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {userData} from '../Redux/actions/user';

const validationSchema = Yup.object().shape({
  userName: Yup.string().required().min(5).max(264).label('UserName'),
  password: Yup.string().required().min(6).max(264).label('Password'),
});
function Login({history}) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (dataUser, resetForm) => {
    setVisible(true);
    try {
      const {data, status} = await login(dataUser);
      if (status === 200) {
        toast.success('Thanks. Your account has been created ', {
          position: 'top-right',
          closeOnClick: true,
        });
        dispatch(userData(data.token));
        resetForm();
        setVisible(false);
        history.replace('/');
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
      <Baner title="READ ABOUT ME" subTitle="LOG IN" />
      <ReactHelmet title="LOGIN" />
      <div
        style={{backgroundColor: colors.background}}
        className="flex flex-col justify-center items-center mx-auto z-10 mt-72 lg:pt-24 ">
        <div className="mt-2 mb-8 ">
          <Icon className="w-14 mb-0 " name="signIn" />
          <h5 className="text-center text-white text-lg mt-0 pt-0 font-bold">
            Log in
          </h5>
        </div>
        {visible && <ProgresBar loading={visible} />}
        <div className="w-full md:w-4/5 xl:w-4/6">
          <AppForm
            initialValues={{
              userName: '',
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
                name="password"
                type="password"
                placeholder="Enter your password *"
              />
            </div>
            <div className="flex w-full justify-center items-center text-center my-3">
              <input type="checkbox" className=" bg-gray-500" />
              <div className="flex  text-center items-center justify-center">
                <label className="text-gray-300 text-xs md:text-sm mx-2 ">
                  Remember me
                </label>
              </div>
            </div>

            <SubmitButton
              className="bg-blue-600 hover:bg-blue-800"
              title="Log In"
            />
          </AppForm>
          <div className="flex mb-10 -mt-8 text-center items-center justify-center">
            <p className="text-blue-400 hover:text-blue-600 text-xs font-bold md:text-sm cursor-pointer">
              Forgot Password?
            </p>
          </div>
          <div className="flex text-center items-center justify-center">
            <p className="text-gray-300 text-xs md:text-sm mx-2 ">
              Don`t have an account?
            </p>
          </div>
          <div className="flex mb-10 text-center items-center justify-center">
            <NavLink to="/register">
              <p className="text-blue-400 hover:text-blue-600 text-xs font-bold md:text-sm cursor-pointer">
                Sign Up
              </p>
            </NavLink>
          </div>
          <ToastContainer theme="colored" />
        </div>
      </div>
    </>
  );
}

export default Login;
