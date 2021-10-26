import {USER_DATA} from '../actions/user';

const initialState = {
  userData: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {...state, userData: action.data};
    default:
      return state;
  }
};
