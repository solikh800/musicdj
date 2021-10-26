import React from 'react';
import {NavLink} from 'react-router-dom';
import {images} from '../../constants';
import AppBtn from '../appBtn';

const ABOUTALLY = props => {
  return (
    <div className="flex flex-col my-20 lg:grid w-full px-6 lg:grid-cols-2 lg:gap-3">
      <div>
        <h1 className="text-white text-2xl my-8">
          --- ABOUT <p className="text-red-500 ml-10">SOLY</p>
        </h1>
        <div className="text-gray-300">
          <p className="mb-3">
            Ally is an American rapper, producer and DJ best known for being a
            member of A Tribe Called Quest.
          </p>
          <p className="text-gray-500 text-sm mb-5 ">
            She caught the attention of audiences the world over with her
            perfect performance. American DJ and songwriter Ally`s brilliant
            performance have amazed millions of people all over the world. But
            with 3 million record sales and a growing popularity, she stays open
            to her fans and often organizes public meetings.
          </p>
        </div>
        <div className="flex justify-start">
          <NavLink to="/abuot">
            <AppBtn className="bg-gray-200 border-2 cursor-pointer ">
              ABOUT ME
            </AppBtn>
          </NavLink>
        </div>
      </div>
      <div className="flex justify-center self-center w-4/5 rounded-xl overflow-hidden">
        <img src={images.homeDj} alt="homeDj" />
      </div>
    </div>
  );
};

export default ABOUTALLY;
