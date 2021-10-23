import React, {useState} from 'react';
import Baner from '../Components/Baner';
import * as Yup from 'yup';
import {AppForm, AppFormFeild, SubmitButton} from './../Components/form';
import {ToastContainer, toast} from 'react-toastify';
import {sendMessage} from './../Services/server';
import ProgresBar from '../Components/ProgresBar';
import {colors} from '../constants';
import ReactHelmet from './../Components/ReactHelmet';

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
      <ReactHelmet title="Contact" />
      <div
        style={{backgroundColor: colors.background}}
        className="flex flex-col justify-center items-center mx-auto z-10 mt-72 lg:pt-24 ">
        <h3 className="text-white text-center my-2 pb-6 text-2xl">
          Get in touch
        </h3>
        {visible && <ProgresBar loading={visible} />}
        <div className="w-full md:w-4/5 xl:w-4/6">
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
            <div>
              <AppFormFeild name="fullName" type="text" placeholder="name*" />
              <AppFormFeild name="email" type="email" placeholder="Email*" />
              <AppFormFeild
                name="subject"
                type="subject"
                placeholder="subject *"
              />
            </div>
            <div>
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
        </div>
      </div>
    </>
  );
}

export default Contact;
