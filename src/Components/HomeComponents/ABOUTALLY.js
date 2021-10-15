import React from 'react';
import {images} from '../../constants';
import AppBtn from '../appBtn';

const ABOUTALLY = props => {
  return (
    <div className="flex justify-center py-6 px-2  lg:grid lg:grid-cols-2 lg:gap-3">
      <div className="m-4  ">
        <h1 className="text-white text-3xl my-4 ml-4">
          ------ ABOUT <badge className="text-red-500">ALLY</badge>
        </h1>
        <div className="text-gray-300 text-xl mx-2">
          <p>
            Ally is an American rapper, producer and DJ best known for being a
            member of A Tribe Called Quest.
          </p>
          <p className="text-gray-500">
            She caught the attention of audiences the world over with her
            perfect performance. American DJ and songwriter Ally`s brilliant
            performance have amazed millions of people all over the world. But
            with 3 million record sales and a growing popularity, she stays open
            to her fans and often organizes public meetings.
          </p>
        </div>
        <div className="flex justify-start">
          <AppBtn className="bg-gray-200 border-2 cursor-pointer ">
            ABOUT ME
          </AppBtn>
        </div>
      </div>
      <div className="flex justify-center ">
        <img src={images.homeDj} alt="homeDj" />
      </div>
    </div>
  );
};

export default ABOUTALLY;
