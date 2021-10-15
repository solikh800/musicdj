import React, {useState} from 'react';
import Baner from '../Components/Baner';
import * as Yup from 'yup';
import {AppForm, AppFormFeild, SubmitButton} from './../Components/form';
import {ToastContainer, toast} from 'react-toastify';
import {sendMessage} from './../Services/server';
import ProgresBar from '../Components/ProgresBar';
import {colors} from '../constants';
import ABOUTALLY from '../Components/HomeComponents/ABOUTALLY';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().min(6).max(264).label('Name'),
  email: Yup.string().required().email().min(6).max(264).label('Email'),
  subject: Yup.string().required().min(6).max(264).label('Subject'),
  message: Yup.string().required().min(6).max(2048).label('Message'),
});
function Home() {
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (dataUser, resetForm) => {
    setVisible(true);
    try {
      const {data, status} = await sendMessage(dataUser);
      if (status === 201) {
        toast.success(data.message, {
          position: 'top-right',
          closeOnClick: true,
        });
        resetForm();
        setTimeout(() => {
          setVisible(false);
        }, 1000);
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
  const handleBuyTicket = () => {
    console.log('ticket');
  };
  return (
    <div className=" relative 2xl:container h-full">
      <Baner
        onClick={handleBuyTicket}
        title="NEW HOUSE"
        subTitle="MUSIC 2017"
        date="17 JANUARY, 2020"
      />
      <div
        style={{backgroundColor: colors.background}}
        className="relative md:-mt-10 lg:-mt-40 xl:-mt-64 justify-center z-10 ">
        <ABOUTALLY />
      </div>
    </div>
  );
}

export default Home;
