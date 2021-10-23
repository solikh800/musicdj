import {
  BLOG_CATEGORY,
  BLOG_DATA,
  BLOG_RECENTS,
  POST_NUMBER,
  POST,
  TAG,
  CATEGORY,
} from '../actions/blog';

const initialState = {
  dataBlog: [],
  categoryBlog: [],
  recentsBlog: [],
  tagBlog: [],
  category: [],
  postNumber: '',
  post: {},
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
    case POST:
      return {...state, post: action.data};
    case TAG:
      return {...state, tagBlog: action.data};
    case CATEGORY:
      return {...state, category: action.data};

    default:
      return state;
  }
};
