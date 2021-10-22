import {
  BLOG_CATEGORY,
  BLOG_DATA,
  BLOG_RECENTS,
  POST_NUMBER,
} from '../actions/blog';

const initialState = {
  dataBlog: [],
  categoryBlog: [],
  recentsBlog: [],
  postNumber: '',
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOG_DATA:
      return {...state, dataBlog: action.data};

    case BLOG_CATEGORY:
      return {...state, categoryBlog: action.data};

    case BLOG_RECENTS:
      return {...state, recentsBlog: action.data};

    case POST_NUMBER:
      return {...state, postNumber: action.data};

    default:
      return state;
  }
};
