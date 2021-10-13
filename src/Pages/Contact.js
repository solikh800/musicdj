import React, {useState} from 'react';
import Baner from '../Components/Baner';
import * as Yup from 'yup';
import {AppForm, AppFormFeild, SubmitButton} from './../Components/form';
import {ToastContainer, toast} from 'react-toastify';
import {sendMessage} from './../Services/server';
import ProgresBar from '../Components/ProgresBar';
import {colors} from '../constants';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().min(6).max(264).label('Name'),
  email: Yup.string().required().email().min(6).max(264).label('Email'),
  subject: Yup.string().required().min(6).max(264).label('Subject'),
  message: Yup.string().required().min(6).max(2048).label('Message'),
});
function Contact() {
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
  return (
    <>
      <Baner title="READ ABOUT ME" subTitle="CONTACTS" />
      <div
        style={{backgroundColor: colors.background}}
        className="sticky w-screen md:-mt-10 lg:-mt-40 xl:-mt-64 2xl:-mt-96 justify-center z-10 ">
        <h3 className="text-white text-center my-8 text-2xl">Get in touch</h3>
        <div className="flex items-center">
          <AppForm
            initialValues={{
              fullName: '',
              email: '',
              subject: '',
              message: '',
            }}
            onSubmit={(dataUser, {resetForm}) =>
              handleSubmit(dataUser, resetForm)
            }
            validationSchema={validationSchema}>
            <div className="lg:w-2/3 2xl:w-1/2">
              <AppFormFeild name="fullName" type="text" placeholder="name*" />
              <AppFormFeild name="email" type="email" placeholder="Email*" />
              <AppFormFeild
                name="subject"
                type="subject"
                placeholder="subject *"
              />
            </div>
            <div className="lg:w-4/5">
              <AppFormFeild
                textArea={true}
                type="message"
                name="message"
                placeholder="Message *"
              />
            </div>
            <SubmitButton title="SEND MESSAGE" />
          </AppForm>
          <ToastContainer theme="colored" />
          {visible && <ProgresBar loading={visible} />}
        </div>
      </div>
    </>
  );
}

export default Contact;
