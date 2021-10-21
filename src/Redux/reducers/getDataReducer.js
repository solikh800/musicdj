import {EVENT_DATA} from '../actions/getData';

const initialState = {
  eventData: [],
};

export const getDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENT_DATA:
      return {...state, eventData: action.data};

    default:
      return state;
  }
};
