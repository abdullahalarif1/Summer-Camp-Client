import React from 'react';
import Banner from './Banner';
import Instructors from './Instructors';
import ClassesHome from './ClassesHome';
import Feature from './Feature';
import About from './About';


const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Feature></Feature>
        <Instructors></Instructors>
        <ClassesHome></ClassesHome>
        <About></About>
      </div>
    );
};

export default Home;