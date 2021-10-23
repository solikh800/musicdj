import React, {useEffect} from 'react';
import {colors} from '../constants';
import Baner from './../Components/Baner';
import Icon from './../Assets/Svg/Icon/index';
import {useDispatch, useSelector} from 'react-redux';
import {
  fullDataCategory,
  fullPost,
  fullRecentPosts,
} from '../Redux/actions/blog';
import moment from 'moment';
import {useParams} from 'react-router';
import {NavLink} from 'react-router-dom';
import ReactHelmet from './../Components/ReactHelmet';

function BlogPost() {
  const dispatch = useDispatch();
  const {categoryBlog, recentsBlog, post} = useSelector(state => state.blog);
  const myParams = useParams();
  useEffect(() => {
    dispatch(fullPost(myParams.id));
    dispatch(fullDataCategory());
    dispatch(fullRecentPosts());
  }, []);

  const getData = id => {
    dispatch(fullPost(id));
  };

  // let bodyResult = new DOMParser().parseFromString(post.body, 'text/xml');
  return (
    <>
      <Baner title="READ ABOUT ME" subTitle="ONE OF THE POSTS" />
      {post && <ReactHelmet title={post.title} />}
      <div
        style={{backgroundColor: colors.background}}
        className=" md:grid md:items-start md:grid-cols-4 md:gap-3 flex flex-col lg:w-5/6  justify-center items-center mx-auto z-10 mt-72 lg:pt-24 ">
        {/* Post Render */}
        <div className="px-3 mt-10 md:col-span-3">
          {post && (
            <div>
              <h3 className="text-gray-50 text-lg font-bold">{post.title}</h3>
              <div className="flex  justify-between pr-10 sm:w-4/5 lg:w-3/4 ">
                <div className="flex items-center ">
                  <Icon
                    name="calendar"
                    className="w-7 mr-0 text-gray-400 cursor-text hover:text-gray-400"
                  />
                  <p className="text-gray-400 text-xs">
                    {moment(post.date).format('DD MMM yy')}
                  </p>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="user"
                    className="w-7 mr-0 text-gray-400 cursor-text hover:text-gray-400"
                  />
                  <p className="text-gray-400 text-xs">{post.creator}</p>
                </div>
                <NavLink to={`/blog/category/${post.category}`}>
                  <div className="group flex items-center  cursor-pointer">
                    <Icon
                      name="folder"
                      className="w-7 mr-0 text-gray-400 group-hover:text-purple-600 "
                    />
                    <p className="text-gray-400 text-xs group-hover:text-purple-600 ">
                      {post.category}
                    </p>
                  </div>
                </NavLink>
              </div>
              <img
                className="rounded-lg mb-3"
                src={post.image}
                alt={post.title}
              />
              <div className="p-3">
                <td
                  className="text-gray-400 text-sm mb-5"
                  dangerouslySetInnerHTML={{__html: post.body}}
                />
              </div>
              <div className="flex items-center my-10">
                <p className="text-red-600 font-bold">Tags : </p>
                {post.tag &&
                  post.tag.map(item => {
                    return (
                      <NavLink to={`tag/${item}`}>
                        <p className=" text-white text-xs lg:text-sm border-2 p-1 rounded-lg border-gray-600 hover:text-purple-600 mx-2 cursor-pointer ">
                          {item}
                        </p>
                      </NavLink>
                    );
                  })}
              </div>
              <div className="border-b-2 border-gray-400 my-7" />
            </div>
          )}
        </div>
        {/* Category */}
        <div>
          <div className=" w-full px-3 my-10">
            <h3 className="text-red-700 text-lg font-bold mb-3">Category</h3>
            {categoryBlog &&
              categoryBlog.map(item => {
                return (
                  <div key={item}>
                    <NavLink to={`/blog/category/${item}`}>
                      <p className="text-white hover:text-red-500  cursor-pointer">
                        {item}
                      </p>
                    </NavLink>

                    <div className="border-b-2 w-full border-gray-400 my-1" />
                  </div>
                );
              })}
          </div>
          {/* Recent Posts */}
          <div className="px-3 mt-10">
            <h3 className="text-red-700 text-lg font-bold mb-3">
              Recent Posts
            </h3>
            {recentsBlog &&
              recentsBlog.map(item => {
                return (
                  <div key={item._id}>
                    <img
                      onClick={() => getData(item._id)}
                      className="rounded-lg cursor-pointer mb-3"
                      src={item.image}
                      alt={item.title}
                    />

                    <h3
                      onClick={() => getData(item._id)}
                      className="hover:text-white text-sm text-gray-300 cursor-pointer mb-10">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;
