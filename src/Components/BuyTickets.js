import React, {useState} from 'react';
import * as Yup from 'yup';
import {AppForm, AppFormFeild, SubmitButton} from './../Components/form';
import {ToastContainer, toast} from 'react-toastify';
import {sendMessage} from './../Services/server';
import ProgresBar from '../Components/ProgresBar';
import Icon from './../Assets/Svg/Icon/index';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().min(6).max(264).label('Name'),
  email: Yup.string().required().email().min(6).max(264).label('Email'),
  message: Yup.string().required().min(6).max(2048).label('Message'),
});

const BuyTickets = ({hiddenModalComponent, title, price}) => {
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
      <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        {visible && <ProgresBar loading={visible} />}
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
            {/*header*/}
            <div className=" items-start p-2 border-b border-solid border-blue-200 rounded-t">
              <h3 className="text-sm text-red-500 font-bold">Ticket {title}</h3>
            </div>
            <h3 className="text-sm w-full text-center text-gray-50 font-bold">
              Ticket price : {price}
            </h3>
            {/**  body modal */}
            <div className="relative h-full w-96">
              <div className="">
                <AppForm
                  initialValues={{
                    fullName: '',
                    email: '',
                    message: '',
                  }}
                  onSubmit={(dataUser, {resetForm}) =>
                    handleSubmit(dataUser, resetForm)
                  }
                  validationSchema={validationSchema}>
                  <div>
                    <AppFormFeild
                      name="fullName"
                      type="text"
                      placeholder="name*"
                    />
                    <AppFormFeild
                      name="email"
                      type="email"
                      placeholder="Email*"
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
                  <SubmitButton
                    className="bg-red-500 hover:bg-red-800"
                    title="BUY TICKETS"
                  />
                </AppForm>
              </div>
              <ToastContainer theme="colored" />
            </div>
            {/*close button*/}

            <Icon
              name="close"
              className="absolute right-0 -top-3 w-9 h-9 text-red-500 rounded-full"
              onClick={hiddenModalComponent}
            />
          </div>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-40 bg-gray-800"></div>
    </>
  );
};

export default BuyTickets;
