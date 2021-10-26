export const USER_DATA = 'USER_DATA';

export const userData = data => {
  return dispatch => {
    dispatch({
      type: USER_DATA,
      data,
    });
  };
};
