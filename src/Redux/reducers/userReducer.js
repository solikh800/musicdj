import {USER_TOKEN} from '../actions/user';

const initialState = {
  userToken: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TOKEN:
      return {...state, userToken: action.token};
    default:
      return state;
  }
};
