import React from 'react';
import {colors} from '../constants';
import Baner from './../Components/Baner';
import Icon from './../Assets/Svg/Icon/index';
import AppBtn from '../Components/appBtn';

const posts = [
  {
    id: 1,
    title: 'The most common mistakes when managing personal finances',
    date: '04.12.2017',
    image:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-blog-img01.jpg',
    subTitle:
      'The ability to manage money competently is especially valuable quality in the conditions of financial crisis, when the purchasing power of the population is shrinking, inflation is rising, and currency exchange rates are completely unpredictable. Below are the common mistakes related to money affairs along with financial planning advice to help manage your own finances properly.',
  },
  {
    id: 2,
    title: 'Methods of the recruitment',
    date: '04.12.2017',
    image:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-blog-img02.jpg',
    subTitle:
      'Search of staff is not an easy task. According to the departmental heads of personnel management words, in order to find a personnel who will correspond to the relevant customer needs and requirements, it is necessary to carry out a great job.',
  },
  {
    id: 3,
    title: 'Overalls with logo as a method of advertising',
    date: '04.12.2017',
    image:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-blog-img04.jpg',
    subTitle:
      'Overalls bearing the companys logo are related to economy and practicality. A preference of corporate style involves a significant increase of costs for development of design solutions, customized tailoring, selection of necessary materials and so on.',
  },
  {
    id: 4,
    title: 'The main objectives of the marketer',
    date: '04.12.2017',
    image:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-blog-img06.jpg',
    subTitle:
      'The modern market is absolutely unpredictable. And yet it lives according to strict laws. The marketers need to be known to achieve maximum results in their business - that is the main task of the marketer.',
  },
  {
    id: 5,
    title:
      'Recession is a good opportunity to deal a deathblow to the competitors',
    date: '04.12.2017',
    image:
      'https://template65298.motopreview.com/mt-demo/65200/65298/mt-content/uploads/2017/12/mt-1270-blog-img08.jpg',
    subTitle:
      'Media prices are falling, so advertising becomes more profitable. The combination of low prices on media and weak competition gives companies the opportunity to cheaply grab market share.',
  },
];
const Category = [
  {
    id: 1,
    title: 'Business Consulting',
  },
  {
    id: 2,
    title: 'Financial Management',
  },
  {
    id: 3,
    title: 'Marketing',
  },
  {
    id: 4,
    title: 'News',
  },
  {
    id: 5,
    title: 'Small Business',
  },
];

function Blog() {
  return (
    <>
      <Baner title="READ ABOUT ME" subTitle="BLOG" />
      <div
        style={{backgroundColor: colors.background}}
        className=" md:grid md:items-start md:grid-cols-4 md:gap-3 flex flex-col lg:w-5/6  justify-center items-center mx-auto z-10 mt-72 lg:pt-24 ">
        {/* All Post Render */}
        <div className="px-3 mt-10 md:col-span-3">
          {posts.map(item => {
            return (
              <div>
                <h3 className="text-white text-lg hover:text-red-500 font-bold cursor-pointer">
                  {item.title}
                </h3>
                <div className="flex items-center">
                  <Icon name="calendar" className="w-7 text-gray-400" />
                  <p className="text-gray-400 text-sm">{item.date}</p>
                </div>
                <img
                  className="rounded-lg cursor-pointer mb-3"
                  src={item.image}
                  alt={item.title}
                />
                <p className="text-gray-400 text-sm mb-5">{item.subTitle}</p>
                <AppBtn className="bg-red-500 hover:bg-red-700">
                  READ MORE
                </AppBtn>
                <div className="border-b-2 border-gray-400 my-7" />
              </div>
            );
          })}
        </div>
        <div>
          {/* Category */}
          <div className=" w-full px-3 my-10">
            <h3 className="text-white text-lg font-bold mb-3">Category</h3>
            {Category.map(item => {
              return (
                <div>
                  <p className="text-white hover:text-red-500  cursor-pointer">
                    {item.title}
                  </p>

                  <div className="border-b-2 w-full border-gray-400 my-1" />
                </div>
              );
            })}
          </div>
          {/* Recent Posts */}
          <div className="px-3 mt-10">
            <h3 className="text-white text-lg font-bold mb-3">Recent Posts</h3>
            {posts.map(item => {
              return (
                <div>
                  <img
                    className="rounded-lg cursor-pointer mb-3"
                    src={item.image}
                    alt={item.title}
                  />
                  <h3 className="hover:text-white text-sm text-red-400 cursor-pointer mb-10">
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

export default Blog;
