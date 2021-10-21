import {getEvent} from '../../Services/server';

export const EVENT_DATA = 'EVENT_DATA';

export const fullDataEvent = pageNumber => {
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
