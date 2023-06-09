import React from 'react';
import Banner from './Banner';
import Instructors from './Instructors';

const Home = () => {
    return (
      <div className="bg-gradient-to-r from-black to-[#06213d]">
        <Banner></Banner>
        <Instructors></Instructors>
      </div>
    );
};

export default Home;