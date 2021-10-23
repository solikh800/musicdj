import React, {useEffect} from 'react';
import {colors} from '../constants';
import Baner from './../Components/Baner';
import Icon from './../Assets/Svg/Icon/index';
import AppBtn from '../Components/appBtn';
import {useDispatch, useSelector} from 'react-redux';
import {fullDataCategory, fullRecentPosts} from '../Redux/actions/blog';
import moment from 'moment';
import {NavLink} from 'react-router-dom';
import {useParams} from 'react-router';
import {fullTagPost} from './../Redux/actions/blog';

function TagPost() {
  const dispatch = useDispatch();
  const {categoryBlog, recentsBlog, tagBlog} = useSelector(state => state.blog);

  const myParams = useParams();

  useEffect(() => {
    dispatch(fullDataCategory());
    dispatch(fullTagPost(myParams.tag));
    dispatch(fullRecentPosts());
  }, []);

  return (
    <>
      <Baner title="READ ABOUT ME" subTitle="Tag List" />
      <div
        style={{backgroundColor: colors.background}}
        className=" md:grid md:items-start md:grid-cols-4 md:gap-3 flex flex-col lg:w-5/6  justify-center items-center mx-auto z-10 mt-72 lg:pt-24 ">
        <div className="px-3 mt-10 md:col-span-3">
          {/* tag title and subtitle */}
          <div className="mb-8 pr-5">
            <h2 className="my-8 text-left w-full text-white font-bold text-lg">
              {myParams.tag && myParams.tag}
            </h2>
            <p className="text-gray-400 text-sm ">
              The ability to manage money competently is especially valuable
              quality in the conditions of financial crisis, when the purchasing
              power of the population is shrinking, inflation is rising, and
              currency exchange rates are completely unpredictable. Below are
              the common mistakes related to money affairs along with financial
              planning advice to help manage your own finances properly
            </p>
            {/* All Post Render */}
          </div>
          {tagBlog &&
            tagBlog.map(item => {
              return (
                <div key={item._id}>
                  <NavLink to={`/blog/${item._id}`}>
                    <h3 className="text-white text-lg hover:text-red-500 font-bold cursor-pointer">
                      {item.title}
                    </h3>
                  </NavLink>
                  <div className="flex items-center">
                    <Icon name="calendar" className="w-7 text-gray-400" />
                    <p className="text-gray-400 text-sm">
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
          <div className="my-10">
            <p className="text-gray-400 text-sm mt-5 ">
              The budget is the most basic thing in financial planning. It is
              therefore especially important to be careful when compiling the
              budget. To start you have to draw up your own budget for the next
              month and only after it you may make a yearly budget.
            </p>
            <p className="text-gray-400 text-sm mt-5">
              As the basis takes your monthly income, subtract from it such
              regular expenses as the cost of housing, transportation, and then
              select 20-30% on savings or mortgage loan payment.
            </p>
            <p className="text-gray-400 text-sm ">
              The rest can be spent on living: restaurants, entertainment, etc.
              If you are afraid of spending too much, limit yourself in weekly
              expenses by having a certain amount of ready cash.
            </p>
            <p className="text-gray-400 text-sm mt-5">
              "When people borrow, they think that they should return it as soon
              as possible," said Sofia Bera, a certified financial planner and
              founder of Gen Y Planning company. And at its repayment spend all
              that earn. But it's not quite rationally ".
            </p>
            <p className="text-gray-400 text-sm mt-5">
              If you don't have money on a rainy day, in case of an emergency
              (e.g. emergency of car repairs) you have to pay by credit card or
              get into new debts. Keep on account of at least $1000 in case of
              unexpected expenses. And gradually increase the "airbag" to an
              amount equal to your income for up to three-six months.
            </p>
            <p className="text-gray-400 text-sm mt-5">
              "Usually when people plan to invest, they only think about profit
              and they don't think that loss's possible", says Harold Evensky,
              the President of the financial management company Evensky & Katz.
              He said that sometimes people do not do basic mathematical
              calculations.
            </p>

            <p className="text-gray-400 text-sm mt-5">
              For example, forgetting that if in one year they lost 50%, and the
              following year they received 50% of the profits, they did not
              return to the starting point, and lost 25% savings. Therefore,
              think about the consequences. Get ready to any options. And of
              course, it would be wiser to invest in several different
              investment objects.
            </p>
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
                      <NavLink to={`/blog/category/${item._id}`}>
                        <h3 className="hover:text-white text-sm text-gray-300 cursor-pointer mb-10">
                          {item.title}
                        </h3>
                      </NavLink>
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

export default TagPost;
