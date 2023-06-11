import React from 'react';
import Banner from './Banner';
import Instructors from './Instructors';
import ClassesHome from './ClassesHome';
import Feature from './Feature';

const Home = () => {
    return (
      <div className="">
        <Banner></Banner>
        <Instructors></Instructors>
        <ClassesHome></ClassesHome>
        <Feature></Feature>
      </div>
    );
};

export default Home;