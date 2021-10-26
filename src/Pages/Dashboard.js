import React from 'react';
import ReactHelmet from './../Components/ReactHelmet';
import Baner from './../Components/Baner';
import {colors} from '../constants';
import AppText from './../Components/AppText';
import jwt from 'jwt-decode';
import {useSelector, useDispatch} from 'react-redux';
import Icon from '../Assets/Svg/Icon';
import moment from 'moment';
import {userData} from '../Redux/actions/user';

const Dashboard = ({history}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.userData);

  const user = token && jwt(token);
  if (!token) {
    history.replace('/');
  }
  const exit = () => {
    dispatch(userData(null));
    history.replace('/');
  };
  return (
    <>
      <Baner title="READ ABOUT ME" subTitle="Dashboard" />
      <ReactHelmet title="LOGIN" />
      <div
        style={{backgroundColor: colors.background}}
        className="flex flex-col lg:container justify-center items-center mx-auto z-10 mt-72 lg:pt-24 ">
        <div className=" group flex justify-between items-center w-full px-10 mt-6 ">
          <h5 className=" text-lg text-white font-bold text-left">
            My Profile{' '}
          </h5>
          <div
            onClick={exit}
            className=" group cursor-pointer flex justify-center items-center">
            <Icon className=" group-hover:text-red-600  w-10" name="signOff" />
            <h5 className=" group-hover:text-red-600 text-lg text-white font-bold text-left">
              Exit
            </h5>
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 gap-2 my-7">
          <div className="flex flex-col md:col-span-1 justify-center items-center">
            <div className="w-28 h-28 rounded-full flex justify-center items-center  bg-purple-600">
              <Icon className="w-20" name="user" />
            </div>
          </div>
          <div className="flex flex-col md:col-span-2 md:items-start justify-center items-center">
            <AppText className="font-bold text-lg text-purple-600">
              Hello {token && user.userName}
            </AppText>

            <div className="flex">
              <AppText className="font-bold text-lg mr-2 text-purple-600">
                Email :
              </AppText>
              <AppText className="font-bold text-lg text-gray-100">
                {token && user.email}
              </AppText>
            </div>
            <div className="flex">
              <AppText className="font-bold text-lg mr-2 text-purple-600">
                User Level :
              </AppText>
              <AppText className="font-bold text-lg text-gray-100">
                {token && user.role}
              </AppText>
            </div>
            <div className="flex">
              <AppText className="font-bold text-lg mr-2 text-purple-600">
                production date :{' '}
              </AppText>
              <AppText className="font-bold text-lg text-gray-100">
                {token && moment(user.createDate).format('DD MMM yy')}
              </AppText>
            </div>
          </div>
        </div>
        <div className="border-t-2 w-full border-purple-400 my-5 " />
        <div className="w-full px-10">
          <h5 className=" text-lg text-white font-bold text-left">
            My Comments{' '}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
