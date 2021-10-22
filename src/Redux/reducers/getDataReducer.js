import {EVENT_DATA, SERVICES_DATA} from '../actions/getData';

const initialState = {
  eventData: [],
  servicesData: [],
};

export const getDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENT_DATA:
      return {...state, eventData: action.data};
    case SERVICES_DATA:
      return {...state, servicesData: action.data};

    default:
      return state;
  }
};
