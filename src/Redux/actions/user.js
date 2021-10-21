export const USER_TOKEN = 'USER_TOKEN';

export const loginToken = token => {
  return dispatch => {
    dispatch({
      type: USER_TOKEN,
      token: token,
    });
  };
};
