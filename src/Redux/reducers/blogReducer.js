import {BLOG_DATA} from '../actions/blog';

const initialState = {
  dataBlog: [],
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOG_DATA:
      return {...state, jokes: action.data};

    default:
      return state;
  }
};
