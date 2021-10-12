import React, {useState} from 'react';
import Baner from '../Components/Baner';
import * as Yup from 'yup';
import axios from 'axios';
import {AppForm, AppFormFeild, SubmitButton} from './../Components/form';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().min(6).max(264).label('Name'),
  email: Yup.string().required().email().min(6).max(264).label('Email'),
  subject: Yup.string().required().min(6).max(264).label('Subject'),
  message: Yup.string().required().min(6).max(2048).label('Message'),
});
function Contact() {
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (user, resetForm) => {
    console.log(user);
    setVisible(true);
    setResult(null);
    user.email = user.email.toLowerCase();
    await axios
      .post(`http:google.com/contact`, JSON.stringify(user), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        setResult(
          'با تشکر. پیام شما دریافت شد پس از بررسی و پاسخ داده می شود.',
        );
        setVisible(false);
        resetForm();
      })
      .catch(err => {
        setResult('متاسفانه مشکلی در ارسال پیام پیش آمده لطفا بعدا تلاش کنید');
        setVisible(false);
      });

    setTimeout(() => {
      setResult(null);
    }, 3000);
  };
  return (
    <div>
      <Baner title="READ ABOUT ME" subTitle="CONTACTS" />
      <div className="w-screen justify-center">
        <h3 className="text-white text-center my-8 text-2xl">Get in touch</h3>
        <div className="flex items-center">
          <AppForm
            initialValues={{
              fullName: '',
              email: '',
              subject: '',
              message: '',
            }}
            onSubmit={(user, {resetForm}) => handleSubmit(user, resetForm)}
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
            {visible && (
              <div className="flex absolute z-50 ">{/* <Progress /> */}</div>
            )}
            <div className="lg:w-4/5">
              <AppFormFeild
                textArea={true}
                type="message"
                name="message"
                placeholder="Message *"
              />
            </div>
            {result && (
              <div className="bg-red-400 m-3 w-max p-2 text-white font-bold rounded-2xl">
                <h4>{result}</h4>
              </div>
            )}
            <SubmitButton title="SEND MESSAGE" />
          </AppForm>
        </div>
      </div>
    </div>
  );
}

export default Contact;
