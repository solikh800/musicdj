import {getEvent, getServices} from '../../Services/server';

export const EVENT_DATA = 'EVENT_DATA';
export const SERVICES_DATA = 'SERVICES_DATA';

export const fullDataEvent = () => {
  return async dispatch => {
    try {
      const {data, status} = await getEvent();
      if (status === 200) {
        dispatch({
          type: EVENT_DATA,
          data: data,
        });
      }
    } catch (error) {
      if (!!error.message) {
        if (error.response !== undefined) {
          console.log(error.response.data.message);
        } else {
          console.log('err');
        }
      }
    }
  };
};
export const fullDataServices = () => {
  return async dispatch => {
    try {
      const {data, status} = await getServices();
      if (status === 200) {
        dispatch({
          type: SERVICES_DATA,
          data: data,
        });
      }
    } catch (error) {
      if (!!error.message) {
        if (error.response !== undefined) {
          console.log(error.response.data.message);
        } else {
          console.log('err');
        }
      }
    }
  };
};
