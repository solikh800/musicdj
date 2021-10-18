import React, {useState} from 'react';
import Baner from '../Components/Baner';
import * as Yup from 'yup';
import {AppForm, AppFormFeild, SubmitButton} from './../Components/form';
import {ToastContainer, toast} from 'react-toastify';
import {sendMessage} from './../Services/server';
import ProgresBar from '../Components/ProgresBar';
import {colors} from '../constants';
import ABOUTALLY from '../Components/HomeComponents/ABOUTALLY';
import UPCOMINGEVENTS from './../Components/HomeComponents/UPCOMINGEVENTS';
import WHEREIPLAY from './../Components/HomeComponents/WHEREIPLAY';
import MUSICTRACKS from './../Components/HomeComponents/MUSICTRACKS';
import VIDEOS from './../Components/HomeComponents/VIDEOS';
import MYGALLERY from './../Components/HomeComponents/MYGALLERY';

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

  const styleComponents =
    'flex flex-col justify-center items-center 2xl:container mx-auto z-10 ';
  return (
    <>
      <Baner
        onClick={handleBuyTicket}
        title="NEW HOUSE"
        subTitle="MUSIC 2017"
        date="17 JANUARY, 2020"
      />
      <div
        style={{backgroundColor: colors.background}}
        className="flex w-full justify-center items-center 2xl:container mx-auto z-10 mt-72 lg:pt-24 ">
        <ABOUTALLY />
      </div>
      <div
        style={{backgroundColor: colors.secondary}}
        className={styleComponents}>
        <UPCOMINGEVENTS />
      </div>
      <div
        style={{backgroundColor: colors.background}}
        className={styleComponents}>
        <WHEREIPLAY />
      </div>
      <div
        style={{backgroundColor: colors.secondary}}
        className={styleComponents}>
        <MUSICTRACKS />
      </div>
      <div
        style={{backgroundColor: colors.background}}
        className={styleComponents}>
        <VIDEOS />
      </div>
      <div
        style={{backgroundColor: colors.secondary}}
        className={styleComponents}>
        <MYGALLERY />
      </div>
    </>
  );
}

export default Home;
