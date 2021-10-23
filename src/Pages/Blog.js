import React, {useEffect, useState} from 'react';
import {colors} from '../constants';
import Baner from './../Components/Baner';
import Icon from './../Assets/Svg/Icon/index';
import AppBtn from '../Components/appBtn';
import {useDispatch, useSelector} from 'react-redux';
import {
  fullDataBlog,
  fullDataCategory,
  fullRecentPosts,
} from '../Redux/actions/blog';
import moment from 'moment';
import {fullPostNumber} from './../Redux/actions/blog';
import {NavLink} from 'react-router-dom';

function Blog() {
  const dispatch = useDispatch();
  const [pageIndex, setPageIndex] = useState(1);
  const {dataBlog, categoryBlog, recentsBlog, postNumber} = useSelector(
    state => state.blog,
  );
  const finalPage = Math.ceil(postNumber / 3);

  const changePage = async index => {
    await dispatch(fullDataBlog(index));
    setPageIndex(index);
  };
  useEffect(() => {
    dispatch(fullDataBlog(1));
    dispatch(fullDataCategory());
    dispatch(fullRecentPosts());
    dispatch(fullPostNumber());
  }, []);

  const moveEnd = () => {
    setPageIndex(finalPage);
    dispatch(fullDataBlog(finalPage));
  };
  const moveStart = () => {
    dispatch(fullDataBlog(1));
    setPageIndex(1);
  };
  const nextPage = () => {
    if (pageIndex !== finalPage) {
      dispatch(fullDataBlog(pageIndex + 1));
      setPageIndex(pageIndex + 1);
    }
  };
  const prevPage = () => {
    if (pageIndex !== 0) {
      dispatch(fullDataBlog(pageIndex - 1));
      setPageIndex(pageIndex - 1);
    }
  };
  return (
    <>
      <Baner title="READ ABOUT ME" subTitle="BLOG" />
      <div
        style={{backgroundColor: colors.background}}
        className=" md:grid md:items-start md:grid-cols-4 md:gap-3 flex flex-col lg:w-5/6  justify-center items-center mx-auto z-10 mt-72 lg:pt-24 ">
        {/* All Post Render */}
        <div className="px-3 mt-10 md:col-span-3">
          {dataBlog &&
            dataBlog.map(item => {
              return (
                <div key={item._id}>
                  <NavLink to={`/blog/${item._id}`}>
                    <h3 className="text-white text-lg hover:text-red-500 font-bold cursor-pointer">
                      {item.title}
                    </h3>
                  </NavLink>
                  <div className="flex items-center">
                    <Icon
                      name="calendar"
                      className="w-7 mr-0 lg:text-sm cursor-text hover:text-gray-400 text-gray-400"
                    />
                    <p className="text-gray-400 text-xs">
                      {moment(item.date).format('DD MMM yy')}
                    </p>
                  </div>
                  <NavLink to={`/blog/${item._id}`}>
                    <img
                      className="rounded-lg cursor-pointer mb-3"
                      src={item.image}
                      alt={item.title}
                    />
                  </NavLink>
                  <p className="text-gray-400 text-sm mb-5">{item.subTitle}</p>
                  <NavLink to={`/blog/${item._id}`}>
                    <AppBtn className="bg-red-500 hover:bg-red-700">
                      READ MORE
                    </AppBtn>
                  </NavLink>
                  <div className="border-b-2 border-gray-400 my-7" />
                </div>
              );
            })}
          {/* pagination */}
          <div className="flex items-center">
            {pageIndex !== 1 ? (
              <>
                <Icon
                  onClick={moveStart}
                  name="angleDoubleLeft"
                  className="w-8 text-white"
                />
                <Icon
                  onClick={prevPage}
                  name="angleLeft"
                  className="w-6 text-white"
                />
              </>
            ) : null}
            {postNumber &&
              Array.from({length: Math.ceil(postNumber / 3)}).map(
                (item, index) => {
                  const textColor =
                    pageIndex === index + 1
                      ? 'text-red-500 font-bold'
                      : 'text-white';
                  return (
                    <p
                      key={`${item}+${index}`}
                      onClick={() => changePage(index + 1)}
                      className={
                        'text-center text-lg w-8 hover:text-red-500 cursor-pointer transform hover:scale-110 ' +
                        textColor
                      }>
                      {index + 1}
                    </p>
                  );
                },
              )}
            {pageIndex !== Math.ceil(postNumber / 3) ? (
              <>
                {' '}
                <Icon
                  onClick={nextPage}
                  name="angleRight"
                  className="w-6 text-white"
                />
                <Icon
                  onClick={moveEnd}
                  name="angleDoubleRight"
                  className="w-8 text-white"
                />
              </>
            ) : null}
          </div>
        </div>
        <div>
          {/* Category */}
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
                    <NavLink to={`/blog/${item._id}`}>
                      <img
                        className="rounded-lg cursor-pointer mb-3"
                        src={item.image}
                        alt={item.title}
                      />
                    </NavLink>
                    <NavLink to={`/blog/${item._id}`}>
                      <h3 className="hover:text-white text-sm text-gray-300 cursor-pointer mb-10">
                        {item.title}
                      </h3>
                    </NavLink>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
