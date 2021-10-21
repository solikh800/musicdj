import axios from 'axios';
import address from '../../Services/config.json';

export const BLOG_DATA = 'BLOG_DATA';

export const fullBlogData = pageNumber => {
  return async dispatch => {
    try {
      const {data} = await axios.get(
        `${address.server}/dataBlog/${pageNumber}`,
      );
      dispatch({
        type: BLOG_DATA,
        data: data,
      });
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
