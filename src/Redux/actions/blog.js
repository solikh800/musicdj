import {
  getPostByTag,
  getBlogData,
  getBlogCategory,
  getBlogRecentPosts,
  getBlogPostNumber,
  getBlogPost,
  getPostByCategory,
} from '../../Services/server';
//const
export const BLOG_DATA = 'BLOG_DATA';
export const BLOG_CATEGORY = 'BLOG_CATEGORY';
export const BLOG_RECENTS = 'BLOG_RECENTS';
export const POST_NUMBER = 'POST_NUMBER';
export const POST = 'POST';
export const TAG = 'TAG';
export const CATEGORY = 'CATEGORY';

export const fullDataBlog = pageNumber => {
  return async dispatch => {
    try {
      const {data, status} = await getBlogData(pageNumber);
      if (status === 200) {
        dispatch({
          type: BLOG_DATA,
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
export const fullDataCategory = () => {
  return async dispatch => {
    try {
      const {data, status} = await getBlogCategory();
      if (status === 200) {
        dispatch({
          type: BLOG_CATEGORY,
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
export const fullRecentPosts = () => {
  return async dispatch => {
    try {
      const {data, status} = await getBlogRecentPosts();
      if (status === 200) {
        dispatch({
          type: BLOG_RECENTS,
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
export const fullPostNumber = () => {
  return async dispatch => {
    try {
      const {data, status} = await getBlogPostNumber();

      if (status === 200) {
        dispatch({
          type: POST_NUMBER,
          data: data[0].postNumber,
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
export const fullPost = id => {
  return async dispatch => {
    try {
      const {data, status} = await getBlogPost(id);
      if (status === 200) {
        dispatch({
          type: POST,
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
export const fullTagPost = tag => {
  return async dispatch => {
    try {
      const {data, status} = await getPostByTag(tag);
      if (status === 200) {
        dispatch({
          type: TAG,
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
export const fullCategory = tag => {
  return async dispatch => {
    try {
      const {data, status} = await getPostByCategory(tag);
      if (status === 200) {
        dispatch({
          type: CATEGORY,
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
